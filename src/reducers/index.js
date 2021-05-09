import { combineReducers } from "redux";
import temp from "modules/placeholder";

const heroData = {
  feed: temp.trello.projects.cards,
  card: temp.trello.projects.cards[0]
}

const hero = (data = heroData, action) => {
  if (action.type === "HERO") {
    return action.payload;
  }
  return data;
};

const siteWidth = (state = 0, action) => {
  if (action.type === "SITEWIDTH") {
    return action.payload;
  }
  return state;
};

const count = (state = 0, action) => {
  if (action.type === "COUNTDOWN") {
    return action.payload;
  }
  return state;
};

const test = (test = false, action) => {
  if (action.type === "TEST") {
    return action.payload;
  }
  return test;
};

const pause = (paused = false, action) => {
  if (action.type === "MOTION_STATE") {
    return action.payload;
  }
  return paused;
};

const menuState = (state = false, action) => {
  if (action.type === "MENU_STATE") {
    return action.payload;
  }
  return state;
};

const npm = (data = {}, action) => {
  if (action.type === "NPM_DATA") {
    return action.payload;
  }
  return data;
};

const gem = (data = {}, action) => {
  if (action.type === "GEM_DATA") {
    return action.payload;
  }
  return data;
};

const manifest = (data = {}, action) => {
  if (action.type === "MANIFEST_DATA") {
    return action.payload;
  }
  return data;
};

const timezone = (zone = {}, action) => {
  if (action.type === "TIMEZONE_DATA") {
    return action.payload;
  }
  return zone;
};

const trello = (data = {}, action) => {
  if (action.type === "TRELLO_DATA") {
    return action.payload;
  }
  return data;
};

const medium = (data = {}, action) => {
  if (action.type === "MEDIUM_DATA") {
    return action.payload;
  }
  return data;
};

const spotify = (playlist = [], action) => {
  if (action.type === "SPOTIFY_DATA") {
    return action.payload;
  }
  return playlist;
};

const github = (profile = {}, action) => {
  if (action.type === "GITHUB_DATA") {
    return action.payload;
  }
  return profile;
};

const treehouse = (profile = {}, action) => {
  if (action.type === "TREEHOUSE_DATA") {
    return action.payload;
  }
  return profile;
};

export default combineReducers({
  treehouse,
  manifest,
  timezone,
  pause,
  spotify,
  medium,
  github,
  trello,
  menuState,
  count,
  siteWidth,
  test,
  hero,
  gem,
  npm
});
