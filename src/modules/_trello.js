import axios from "axios";
import showdown from "showdown";
import { remove, pathify } from "modules/helpers";
import { tl1, tl2 } from "animations/hero";

const converter = new showdown.Converter();

const TRELLO = {
  USER_ID: process.env.REACT_APP_TRELLO_USER_ID,
  BOARD_ID: process.env.REACT_APP_TRELLO_BOARD_ID,
  LIST: {
    PAGES: process.env.REACT_APP_TRELLO_LIST_PAGES,
    HERO: process.env.REACT_APP_TRELLO_LIST_HERO,
    PROJECTS: process.env.REACT_APP_TRELLO_LIST_PROJECTS,
    ROLES: process.env.REACT_APP_TRELLO_LIST_ROLES,
    EDUCATION: process.env.REACT_APP_TRELLO_LIST_EDUCATION,
  },
  API_KEY: process.env.REACT_APP_TRELLO_API_KEY,
  USER_TOKEN: process.env.REACT_APP_TRELLO_USER_TOKEN,
  API_BASE: "https://api.trello.com/1/",
};

const getTrello = target => axios
  .get(`${TRELLO.API_BASE}${target}?key=${TRELLO.API_KEY}&token=${TRELLO.USER_TOKEN}`, { headers: { Accept: "application/json" } })
  .then(({ data }) => data)
  .catch(err => console.error(err));

const promiseData = target => Promise.all(target).then(data => data);

const getCardsOnList = (id = TRELLO.LIST.HERO) => getTrello(`list/${id}/cards/`);

const getSvgsOnCard = actions => {
  let result = null;
  actions.forEach(({ data }) => {
    if (data.text) {
      if (data.text.startsWith("`<svg")) {
        result = data.text.slice(1, -1);        
      }
    }
  });
  return result;
}

const attachAnimation = card => card.animation = (pause, target) => {
  switch (card.id) {
    case "6073409c74b96c31fb853842":
      return tl2(pause, target);    
    default:
      return tl1(pause, target);
  }
}

const getCardData = async (id, list) => {
  let data = await getCardsOnList(id);

  if (!data) { 
    return null; 
  } else {
    data = data.map(async card => {
      const actions = await getTrello(`cards/${card.id}/actions`);
      const attachments = await getTrello(`cards/${card.id}/attachments`);
      const route = `/article/${pathify(list)}/${pathify(remove.hero(card.name))}`;
      card.route = route;
      card.actions = actions;
      card.attachments = attachments;
      card.list = { name: list };
      card.desc = converter.makeHtml(card.desc);
      if (list !== "Pages") { card.attachments.push({ name: "Read more", url: route }); }
      card.svg = getSvgsOnCard(actions);
      card.class = `card-${card.id}`;
      card.placeholder = false;
      attachAnimation(card);
      return card;
    });
    return promiseData(data);
  }
}

const getList = async (id = TRELLO.LIST.HERO) => {
  let data = await getTrello(`lists/${id}`);
  return !data ? null : { id: data.id, name: data.name };
}

export default async function getTrelloData() {
  const data = {
    pages: {
      info: await getList(TRELLO.LIST.PAGES),
      cards: await getCardData(TRELLO.LIST.PAGES, "Pages"),
    },
    projects: {
      info: await getList(TRELLO.LIST.PROJECTS),
      cards: await getCardData(TRELLO.LIST.PROJECTS, "Projects"),
    },
    roles: {
      info: await getList(TRELLO.LIST.ROLES),
      cards: await getCardData(TRELLO.LIST.ROLES, "Roles"),
    },
    education: {
      info: await getList(TRELLO.LIST.EDUCATION),
      cards: await getCardData(TRELLO.LIST.EDUCATION, "Education"),
    },
  };

  if (!data.projects.cards) {
    console.log("failed to getTrelloData");
    return null;
  } else {
    data.ready = true;
    console.log("trello: ", data);
    return data;
  }
};