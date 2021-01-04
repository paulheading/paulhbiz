import { hero } from "./animations";

export const placeholder = {
  id: 0,
  name: "Full Stack Developer working in React & Vue.js",
  marquee: "loading data ... please wait",
  link: {
    name: "About Me",
    url: "/about",
  },
  className: "hero-0",
  colors: ["#FC466B", "#3F5EFB"],
  svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="320" height="320" viewBox="0 0 320 320" xml:space="preserve" enable-background="new 0 0 320 320"><path id="framework" d="M195.8,237h-71.7v-42.9h71.7v-51.3l-71.7,20.1l71.7-45h-71.7L195.8,83h-71.7" fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/></svg>`,
  animation: () => {
    hero.tl0();
  },
};
