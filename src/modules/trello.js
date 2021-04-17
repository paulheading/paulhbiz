import axios from "axios";
import showdown from "showdown";
import { remove, pathify } from "./helpers";
import { tl0, tl2 } from "./animations/hero";

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

const getTrello = target => {
  return axios
  .get(`${TRELLO.API_BASE}${target}?key=${TRELLO.API_KEY}&token=${TRELLO.USER_TOKEN}`, { headers: { Accept: "application/json" }, })
  .then(({ data }) => data)
  .catch((err) => console.error(err));
}

const promiseData = target => Promise.all(target).then(data => data);

function getCardsOnList(id = TRELLO.LIST.HERO) {
  return getTrello(`list/${id}/cards/`).then((data) => {
    return data.map((value) => {
      value.desc = converter.makeHtml(value.desc);
      return value;
    });
  });
}

const getSvgsOnCard = actions => {
  let result;
  actions.forEach(({ data }) => {
    if (data.text) {
      if (data.text.startsWith("`<svg")) {
        result = data.text.slice(1, -1);        
      }
    }
  });
  return result;
}

const attachAnimation = card => {
  return card.animation = () => {
    if (card.id === "606d70215309533eec28564a") {
      return tl0();
    } else if (card.id === "6073409c74b96c31fb853842") {
      return tl2();
    } else {
      return tl0();
    }
  }
}

async function getCardData(id) {
  let cards = await getCardsOnList(id);
  cards = cards.map(async card => {
    const actions = await getTrello(`cards/${card.id}/actions`);
    const attachments = await getTrello(`cards/${card.id}/attachments`);
    const route = pathify(remove.hero(card.name));
    card.route = route;
    card.actions = actions;
    card.attachments = attachments;
    card.attachments.push({ name: "Read more", url: `/blog/${route}` });
    card.svg = getSvgsOnCard(actions);
    card.className = `card-${card.id}`;
    attachAnimation(card);
    return card;
  });
  return promiseData(cards);
}

async function getList(id = TRELLO.LIST.HERO) {
  const data = await getTrello(`lists/${id}`);
  return { id: data.id, name: data.name };
}

export default async function getTrelloData() {
  const data = {
    pages: {
      info: await getList(TRELLO.LIST.PAGES),
      cards: await getCardData(TRELLO.LIST.PAGES),
    },
    projects: {
      info: await getList(TRELLO.LIST.PROJECTS),
      cards: await getCardData(TRELLO.LIST.PROJECTS),
    },
    roles: {
      info: await getList(TRELLO.LIST.ROLES),
      cards: await getCardData(TRELLO.LIST.ROLES),
    },
    education: {
      info: await getList(TRELLO.LIST.EDUCATION),
      cards: await getCardData(TRELLO.LIST.EDUCATION),
    },
  };
  console.log("trello: ", data);
  return data;
}
