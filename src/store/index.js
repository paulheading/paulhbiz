import { tl0 } from "animations/hero";
import { pathify, remove } from "modules/_helpers";

const id = "000000";
const name = "Hero: Full Stack Designer working in React & Vue.js";
const route = `/article/projects/${pathify(remove.hero(name))}`;

export const card = {
  svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="320" height="320" viewBox="0 0 320 320" xml:space="preserve" enable-background="new 0 0 320 320"><path id="framework" d="M195.8,237h-71.7v-42.9h71.7v-51.3l-71.7,20.1l71.7-45h-71.7L195.8,83h-71.7" fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/></svg>`,
  desc: "I'm a Full Stack Designer. I design and build with the React.js and Vue.js frameworks. I currently work for the Barbican in London and have just over 1 years experience.",
  attachments: [{ name: "Read more", url: route }],
  marquee: "loading data ... please wait",
  start: "2019-12-01T12:19:00.000Z",
  className: `card-${id}`,
  animation: (pause, target) => tl0(pause, target),
  due: "2021-12-01T12:19:00.000Z",
  dueComplete: false,
  route,
  name,
  id,  
};

const trello = {
  ready: false,
  pages: {},
  projects: {
    info: {},
    cards: [card],
  },
  roles: {},
  education: {}
}

const tracks = count => {
  let tracks = [];
  for (let index = 0; index < count; index++) {
    tracks.push({
      artists: [{ name: "", external_urls: { spotify: "" } }],
      name: "",
      url: "",
    });
  }
  return tracks;
}

const spotify = {
  ready: false,
  profile: "",
  tracks: tracks(5),
  playlist: {
    images: [{}, { url: "" }],
    owner: "",
    name: "",
    url: "",
  }
}

const treehouse = {
  badges: [],
  points: {
    Javascript: 100,
    Databases: 100,
    Design: 100,
  },
  profile_name: "paulheading",
  profile_url: "https://teamtreehouse.com/paulheading"
}

const init = {
  trello,
  spotify,
  treehouse,
  pause: false,
  count: 0,
  gem: {
    downloads: 20000
  },
  npm: {
    downloads: 1000
  },
}

export default init;