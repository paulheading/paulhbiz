import { simplify, localify, objectKey } from "../helpers";
import { placeholder } from "../placeholder";
import { hero } from "../animations";

const fetch = require("node-fetch");
const showdown = require("showdown");
const converter = new showdown.Converter();
const TRELLO = {
  USER_ID: process.env.REACT_APP_TRELLO_USER_ID,
  BOARD_ID: process.env.REACT_APP_TRELLO_BOARD_ID,
  LIST: {
    HERO: process.env.REACT_APP_TRELLO_LIST_HERO,
    PROJECTS: process.env.REACT_APP_TRELLO_LIST_PROJECTS,
    ROLES: process.env.REACT_APP_TRELLO_LIST_ROLES,
    EDUCATION: process.env.REACT_APP_TRELLO_LIST_EDUCATION,
  },
  API_KEY: process.env.REACT_APP_TRELLO_API_KEY,
  USER_TOKEN: process.env.REACT_APP_TRELLO_USER_TOKEN,
  API_BASE: "https://api.trello.com/1/",
};

function fetchTrello(target) {
  return fetch(
    `${TRELLO.API_BASE}${target}?key=${TRELLO.API_KEY}&token=${TRELLO.USER_TOKEN}`,
    {
      method: "GET",
      headers: { Accept: "application/json" },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
}

function promiseData(target) {
  return Promise.all(target).then((data) => {
    return data;
  });
}

function getCardsOnList(id = TRELLO.LIST.HERO) {
  return fetchTrello(`list/${id}/cards/`).then((data) => {
    return data.map((value) => {
      value.desc = converter.makeHtml(value.desc);
      return value;
    });
  });
}

function getAttachmentsOnCard(id) {
  return fetchTrello(`cards/${id}/attachments`);
}

function prepColors(colors) {
  colors = colors.replace(/\r?\n|\r/g, " ");
  colors = colors.split(" ");
  colors = colors.filter((color) => {
    return color !== "" && !color.startsWith("**");
  });
  colors = colors.map((color) => {
    return simplify(color);
  });
  return colors;
}

function getActionsOnCard(id) {
  return fetchTrello(`cards/${id}/actions`).then((data) => {
    return data.map(({ data }) => {
      if (data.text) {
        let text = data.text;
        let html = converter.makeHtml(text);
        if (text.startsWith("**svg**")) {
          return { svg: text.split("`")[1] };
        } else if (text.startsWith("**colors**")) {
          return { colors: prepColors(text) };
        } else {
          return { text, html };
        }
      } else {
        return null;
      }
    });
  });
}

function getColorsOnCard(actions) {
  let results;
  actions.forEach((value) => {
    if (value) {
      if (objectKey(value) === "colors") {
        results = Object.values(value)[0];
      }
    }
  });
  return results;
}

function getSvgsOnCard(actions) {
  let results;
  actions.forEach((value) => {
    if (value) {
      if (objectKey(value) === "svg") {
        results = Object.values(value)[0];
      }
    }
  });
  return results;
}

function createClass(value, className, index) {
  return className ? (value.className = `${className}-${index + 1}`) : null;
}

function createLink(value, className) {
  if (className && className === "hero") {
    if (value.attachments.length === 0) {
      value.attachments.push(placeholder.link);
    }
    value.link = value.attachments[0];
    value.link.url = localify(value.link.url);
  }
}

function attachAnimation(value, className, index) {
  if (className && className === "hero") {
    index = index + 1;
    value.animation = () => {
      if (index === 1) {
        hero.tl1(value);
      } else if (index === 2) {
        hero.tl2(value);
      }
    };
  }
  return value;
}

async function getCardData(id, className = false) {
  let cards = await getCardsOnList(id);
  cards = cards.map(async (value, index) => {
    const actions = await getActionsOnCard(value.id);
    value.actions = actions;
    value.attachments = await getAttachmentsOnCard(value.id);
    value.colors = getColorsOnCard(actions);
    value.svg = getSvgsOnCard(actions);
    createClass(value, className, index);
    createLink(value, className);
    attachAnimation(value, className, index);
    return value;
  });
  return promiseData(cards);
}

async function getList(id = TRELLO.LIST.HERO) {
  const data = await fetchTrello(`lists/${id}`);
  return { id: data.id, name: data.name };
}

export async function getTrelloData() {
  const data = {
    hero: {
      info: await getList(TRELLO.LIST.HERO),
      cards: await getCardData(TRELLO.LIST.HERO, "hero"),
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
