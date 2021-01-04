export const menuState = (query) => {
  return {
    type: "MENU_STATE",
    payload: query,
  };
};

export const siteWidth = (query) => {
  return {
    type: "SITEWIDTH",
    payload: query,
  };
};

export const countdown = (query) => {
  return {
    type: "COUNTDOWN",
    payload: query,
  };
};

export const repeat = (query) => {
  return {
    type: "REPEAT",
    payload: query,
  };
};

export const timezoneData = (query) => {
  return {
    type: "TIMEZONE_DATA",
    payload: query,
  };
};

export const trelloData = (query) => {
  return {
    type: "TRELLO_DATA",
    payload: query,
  };
};

export const mediumData = (query) => {
  return {
    type: "MEDIUM_DATA",
    payload: query,
  };
};

export const spotifyData = (query) => {
  return {
    type: "SPOTIFY_DATA",
    payload: query,
  };
};

export const githubData = (query) => {
  return {
    type: "GITHUB_DATA",
    payload: query,
  };
};

export const treehouseData = (query) => {
  return {
    type: "TREEHOUSE_DATA",
    payload: query,
  };
};
