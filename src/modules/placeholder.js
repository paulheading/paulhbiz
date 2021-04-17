import { tl0 } from "./animations/hero";
import { pathify, remove } from "./helpers";

const vars = {
  id: "000000",
  name: "Hero: Full Stack Designer working in React & Vue.js"
}

vars.route = pathify(remove.hero(vars.name));

export const placeholder = {
  svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="320" height="320" viewBox="0 0 320 320" xml:space="preserve" enable-background="new 0 0 320 320"><path id="framework" d="M195.8,237h-71.7v-42.9h71.7v-51.3l-71.7,20.1l71.7-45h-71.7L195.8,83h-71.7" fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/></svg>`,
  attachments: [{ name: "Read more", url: `/blog/${vars.route}` }],
  marquee: "loading data ... please wait",
  className: `card-${vars.id}`,
  animation: () => tl0(),
  route: vars.route,
  name: vars.name,
  id: vars.id
};

const temp = {
  trello: {
    pages: {},
    projects: {
      info: {},
      cards: [placeholder],
    },
    roles: {},
    education: {}
  },
  treehouse: {
    badges: [],
    points: {
      Javascript: 100,
      Databases: 100,
      Design: 100,
    },
    profile_name: "paulheading",
    profile_url: "https://teamtreehouse.com/paulheading"
  }
}

export default temp;