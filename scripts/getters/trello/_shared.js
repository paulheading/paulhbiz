import axios from 'axios'
import showdown from 'showdown'
import { hero } from 'scripts/animations'

export const get = {};
export const data = {};

export const TRELLO = {
  USER_ID: process.env.NEXT_PUBLIC_TRELLO_USER_ID,
  BOARD_ID: process.env.NEXT_PUBLIC_TRELLO_BOARD_ID,
  LIST: {
    PAGES: process.env.NEXT_PUBLIC_TRELLO_LIST_PAGES,
    HERO: process.env.NEXT_PUBLIC_TRELLO_LIST_HERO,
    PROJECTS: process.env.NEXT_PUBLIC_TRELLO_LIST_PROJECTS,
    ROLES: process.env.NEXT_PUBLIC_TRELLO_LIST_ROLES,
    EDUCATION: process.env.NEXT_PUBLIC_TRELLO_LIST_EDUCATION,
  },
  API_KEY: process.env.NEXT_PUBLIC_TRELLO_API_KEY,
  USER_TOKEN: process.env.NEXT_PUBLIC_TRELLO_USER_TOKEN,
  API_BASE: "https://api.trello.com/1/",
};

export const converter = new showdown.Converter();

data.trello = target => axios
  .get(`${TRELLO.API_BASE}${target}?key=${TRELLO.API_KEY}&token=${TRELLO.USER_TOKEN}`, { headers: { Accept: "application/json" } })
  .then(({ data }) => data)
  .catch(err => console.error(err));

data.promise = target => Promise.all(target).then(data => data);

get.cardsOnList = (id = TRELLO.LIST.HERO) => data.trello(`list/${id}/cards/`);

get.svgsOnCard = actions => {
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

get.list = async (id = TRELLO.LIST.HERO) => {
  let list = await data.trello(`lists/${id}`);
  return !list ? null : { id: list.id, name: list.name };
}

get.animation = card => card.animation = (pause, target) => {
  switch (card.id) {
    case "6073409c74b96c31fb853842":
      return hero.tl2(pause, target);    
    default:
      return hero.tl1(pause, target);
  }
}

