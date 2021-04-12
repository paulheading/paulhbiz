import { tl0 } from "./animations/hero";

const id = "000000";

export const placeholder = {
  id,
  name: "Hero: Full Stack Designer working in React & Vue.js",
  marquee: "loading data ... please wait",
  className: `card-${id}`,
  link: {
    name: "Read more",
    url: "/about",
  },
  svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="320" height="320" viewBox="0 0 320 320" xml:space="preserve" enable-background="new 0 0 320 320"><path id="framework" d="M195.8,237h-71.7v-42.9h71.7v-51.3l-71.7,20.1l71.7-45h-71.7L195.8,83h-71.7" fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/></svg>`,
  animation: () => tl0(),
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