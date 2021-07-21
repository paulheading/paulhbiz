exports.id = 604;
exports.ids = [604];
exports.modules = {

/***/ 4604:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": function() { return /* binding */ card; }
/* harmony export */ });
/* harmony import */ var scripts_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2781);
/* harmony import */ var scripts_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2110);


const id = "000000";
const name = "Hero: Full Stack Designer working in React & Vue.js";
const route = `/article/projects/${(0,scripts_helpers__WEBPACK_IMPORTED_MODULE_1__/* .pathify */ .mi)(scripts_helpers__WEBPACK_IMPORTED_MODULE_1__/* .remove.hero */ .Od.hero(name))}`;
const card = {
  svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="320" height="320" viewBox="0 0 320 320" xml:space="preserve" enable-background="new 0 0 320 320"><path id="framework" d="M195.8,237h-71.7v-42.9h71.7v-51.3l-71.7,20.1l71.7-45h-71.7L195.8,83h-71.7" fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/></svg>`,
  desc: "I'm a Full Stack Designer. I design and build with the React.js and Vue.js frameworks. I currently work for the Barbican in London and have just over 1 years experience.",
  attachments: [{
    name: "Read more",
    url: route
  }],
  animation: (pause, target) => scripts_animations__WEBPACK_IMPORTED_MODULE_0__/* .hero.tl0 */ .rP.tl0(pause, target),
  marquee: "loading data ... please wait",
  start: "2019-12-01T12:19:00.000Z",
  due: "2021-12-01T12:19:00.000Z",
  list: {
    name: 'Projects'
  },
  dueComplete: false,
  class: `card-${id}`,
  placeholder: false,
  route,
  name,
  id
};

const others = count => {
  let others = [];

  for (let index = 0; index < count; index++) {
    others.push({
      list: {
        name: '.'
      },
      placeholder: true,
      name: '.',
      desc: '.',
      attachments: [{
        name: "Read more",
        url: "/"
      }]
    });
  }

  return others;
};

const trello = {
  ready: false,
  pages: {},
  projects: {
    info: {},
    cards: [card, ...others(3)]
  },
  roles: {
    cards: [others(3)]
  },
  education: {
    cards: [others(3)]
  }
};

const tracks = count => {
  let tracks = [];

  for (let index = 0; index < count; index++) {
    tracks.push({
      artist: {
        name: ".",
        url: null
      },
      name: ".",
      url: null
    });
  }

  return tracks;
};

const spotify = {
  ready: false,
  profile: ".",
  tracks: tracks(3),
  playlist: {
    image: null,
    owner: ".",
    name: ".",
    url: null
  }
};
const treehouse = {
  badges: [],
  points: {
    Javascript: 100,
    Databases: 100,
    Design: 100
  },
  profile_name: "paulheading",
  profile_url: "https://teamtreehouse.com/paulheading"
};
const timezone = {
  ready: false,
  location: ".",
  time: "."
};
const gem = {
  downloads: ".",
  ready: false,
  type: "gem",
  name: ".",
  url: null
};
const npm = {
  downloads: ".",
  ready: false,
  type: "npm",
  name: ".",
  url: null
};
const init = {
  trello,
  spotify,
  treehouse,
  timezone,
  pause: false,
  count: 0,
  gem,
  npm
};
/* harmony default export */ __webpack_exports__["Z"] = (init);

/***/ })

};
;