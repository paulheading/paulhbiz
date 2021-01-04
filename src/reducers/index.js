import { combineReducers } from "redux";

const siteWidth = (state = 0, action) => {
  if (action.type === "SITEWIDTH") {
    return action.payload;
  }
  return state;
};

const countdown = (state = 0, action) => {
  if (action.type === "COUNTDOWN") {
    return action.payload;
  }
  return state;
};

const repeat = (state = 1, action) => {
  if (action.type === "REPEAT") {
    return action.payload;
  }
  return state;
};

const menuState = (state = false, action) => {
  if (action.type === "MENU_STATE") {
    return action.payload;
  }
  return state;
};

const timezoneData = (zone = {}, action) => {
  if (action.type === "TIMEZONE_DATA") {
    return action.payload;
  }
  return zone;
};

const trelloData = (data = {}, action) => {
  if (action.type === "TRELLO_DATA") {
    return action.payload;
  }
  return data;
};

const mediumData = (data = {}, action) => {
  if (action.type === "MEDIUM_DATA") {
    return action.payload;
  }
  return data;
};

const spotifyData = (playlist = [], action) => {
  if (action.type === "SPOTIFY_DATA") {
    return action.payload;
  }
  return playlist;
};

const githubData = (profile = {}, action) => {
  if (action.type === "GITHUB_DATA") {
    return action.payload;
  }
  return profile;
};

const treehouseData = (profile = {}, action) => {
  if (action.type === "TREEHOUSE_DATA") {
    return action.payload;
  }
  return profile;
};

export default combineReducers({
  treehouseData,
  timezoneData,
  spotifyData,
  mediumData,
  githubData,
  trelloData,
  menuState,
  countdown,
  repeat,
  siteWidth,
});
