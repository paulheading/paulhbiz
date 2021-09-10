import { filter } from "scripts/helpers";
import { combineReducers } from 'redux'
import init from './init'

let cards = init.trello.projects.cards;
cards = filter.in.hero(cards);

const hero = (data = { feed: cards, card: cards[init.count] }, { type, payload }) => { if (type === "HERO") { return payload; } return data; };
const width = (data = "width data", { type, payload }) => { if (type === "WIDTH") { return payload; } return data; };
const count = (data = init.count, { type, payload }) => { if (type === "COUNT") { return payload; } return data; };
const test = (data = "test data", { type, payload }) => { if (type === "TEST") { return payload; } return data; };
const pause = (data = init.pause, { type, payload }) => { if (type === "PAUSE") { return payload; } return data; };
const menu = (data = "menu data", { type, payload }) => { if (type === "MENU") { return payload; } return data; };
const npm = (data = init.npm, { type, payload }) => { if (type === "NPM") { return payload; } return data; };
const gem = (data = init.gem, { type, payload }) => { if (type === "GEM") { return payload; } return data; };
const timezone = (data = init.timezone, { type, payload }) => { if (type === "TIMEZONE") { return payload; } return data; };
const trello = (data = init.trello, { type, payload }) => { if (type === "TRELLO") { return payload; } return data; };
const medium = (data = init.medium, { type, payload }) => { if (type === "MEDIUM") { return payload; } return data; };
const spotify = (data = init.spotify, { type, payload }) => { if (type === "SPOTIFY") { return payload; } return data; };
const github = (data = "github data", { type, payload }) => { if (type === "GITHUB") { return payload; } return data; };
const treehouse = (data = init.treehouse, { type, payload }) => { if (type === "TREEHOUSE") { return payload; } return data; };

export default combineReducers({
  hero,
  width,
  count,
  test,
  pause,
  menu,
  npm,
  gem,
  timezone,
  trello,
  medium,
  spotify,
  github,
  treehouse
});

