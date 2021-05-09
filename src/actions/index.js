
export const test = query => {
  return {
    type: "TEST",
    payload: query,
  };
};

export const hero = query => {
  return {
    type: "HERO",
    payload: query,
  };
};

export const pause = query => {
  return {
    type: "MOTION_STATE",
    payload: query,
  };
};

export const menuState = query => {
  return {
    type: "MENU_STATE",
    payload: query,
  };
};

export const siteWidth = query => {
  return {
    type: "SITEWIDTH",
    payload: query,
  };
};

export const count = query => {
  return {
    type: "COUNTDOWN",
    payload: query,
  };
};

export const npm = query => {
  return {
    type: "NPM_DATA",
    payload: query,
  };
};

export const gem = query => {
  return {
    type: "GEM_DATA",
    payload: query,
  };
};

export const manifest = query => {
  return {
    type: "MANIFEST_DATA",
    payload: query,
  };
};

export const timezone = query => {
  return {
    type: "TIMEZONE_DATA",
    payload: query,
  };
};

export const trello = query => {
  return {
    type: "TRELLO_DATA",
    payload: query,
  };
};

export const medium = query => {
  return {
    type: "MEDIUM_DATA",
    payload: query,
  };
};

export const spotify = query => {
  return {
    type: "SPOTIFY_DATA",
    payload: query,
  };
};

export const github = query => {
  return {
    type: "GITHUB_DATA",
    payload: query,
  };
};

export const treehouse = query => {
  return {
    type: "TREEHOUSE_DATA",
    payload: query,
  };
};
