exports.id = 230;
exports.ids = [230];
exports.modules = {

/***/ 1835:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "hG": function() { return /* reexport */ BiographyRow; },
  "H4": function() { return /* reexport */ CardsRow; },
  "rW": function() { return /* reexport */ DesktopCards; },
  "ie": function() { return /* reexport */ Downloads; },
  "gt": function() { return /* reexport */ Folder; },
  "VG": function() { return /* reexport */ NameRow; },
  "cG": function() { return /* reexport */ ResumeCards; },
  "bI": function() { return /* reexport */ SkillsRow; },
  "PB": function() { return /* reexport */ SpotifyFeed; },
  "qb": function() { return /* reexport */ Status; },
  "as": function() { return /* reexport */ TrelloFeed; },
  "js": function() { return /* reexport */ TrelloPage; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: ./logos/index.js + 6 modules
var logos = __webpack_require__(7316);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/spotify/feed.js






function SpotifyFeed() {
  const spotify = (0,external_react_redux_.useSelector)(({
    spotify
  }) => spotify);
  const placeholder = !spotify.ready ? "placeholder" : "";
  const profile = spotify.profile;
  const playlist = spotify.playlist;
  const is = {
    tooLong: (title, limit = 18) => title.length > limit ? title.slice(0, limit) + " ..." : title
  };
  const print = {
    track: (value, index) => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
        className: "spotify-feed",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `title track-position ${placeholder}`,
          children: index + 1
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "wrap track-info",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "title track-name",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: value.url,
              className: `link track-name ${placeholder}`,
              children: is.tooLong(value.name)
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "title track-artist",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: `link track-artist ${placeholder}`,
              href: value.artist.url,
              children: is.tooLong(value.artist.name)
            })
          })]
        })]
      }, `track-${index}`);
    }
  };
  print.track.displayName = 'PrintTrack';
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "component spotify-feed",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
      className: "spotify-feed",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "wrap spotify-header",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: playlist.url,
          className: "link spotify-playlist",
          children: playlist.image && /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            width: "80",
            height: "80",
            src: playlist.image,
            alt: playlist.owner,
            className: "img spotify-playlist"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "wrap spotify-playlist",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "wrap playlist-info",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "title playlist-name",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: playlist.url,
                className: `link playlist-name ${placeholder}`,
                children: playlist.name
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "title playlist-owner",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: profile,
                className: `link playlist-owner ${placeholder}`,
                children: playlist.owner
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "wrap spotify-logo",
            children: /*#__PURE__*/jsx_runtime_.jsx(logos/* SpotifyLogo */.qk, {})
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "wrap spotify-tracks",
        children: spotify.tracks.map(print.track)
      })]
    })
  });
}
;
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./icons/index.js + 7 modules
var icons = __webpack_require__(3552);
;// CONCATENATED MODULE: ./components/trello/feed.js







function TrelloFeed() {
  const trello = (0,external_react_redux_.useSelector)(({
    trello
  }) => trello);
  const placeholder = !trello.ready ? "placeholder" : "";
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "component trello-feed",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
      className: "trello-wrap",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "header trello-feed",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `title feed-name ${placeholder}`,
          children: "Projects"
        }), /*#__PURE__*/jsx_runtime_.jsx(icons/* DotsIcon */.YA, {})]
      }), /*#__PURE__*/jsx_runtime_.jsx(DesktopCards, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "trello-feed footer",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `title add-another ${placeholder}`,
          children: "+ Add another card"
        }), /*#__PURE__*/jsx_runtime_.jsx(icons/* AddCardIcon */.tf, {})]
      })]
    })
  });
}
;
// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__(7051);
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);
// EXTERNAL MODULE: ./scripts/helpers/index.js + 2 modules
var helpers = __webpack_require__(2110);
;// CONCATENATED MODULE: ./components/trello/page.js




function TrelloPage({
  name
}) {
  const trello = (0,external_react_redux_.useSelector)(({
    trello
  }) => trello);
  const card = trello.ready && trello.pages.cards.filter(card => name === card.name)[0];
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `component trello-page ${name.toLowerCase()}`,
    children: !card ? helpers/* print.placeholders */.S0.placeholders(3) : external_html_react_parser_default()(card.desc)
  });
}
;
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/trello/cards/desktop.js







function DesktopCards() {
  const trello = (0,external_react_redux_.useSelector)(({
    trello
  }) => trello);
  let content = trello.ready ? helpers/* filter.trello */.hX.trello(trello, "Projects") : helpers/* filter.out.hero */.hX.out.hero(trello.projects.cards);
  content = content.filter((_, index) => index < 3);

  const subtitle = /*#__PURE__*/jsx_runtime_.jsx("span", {
    className: "title card-subtitle placeholder",
    children: "."
  });

  return content.map(({
    name,
    placeholder,
    attachments,
    labels
  }, index) => {
    const link = helpers/* filter.in.more */.hX.in.more(attachments);
    name = helpers/* remove.hero */.Od.hero(name);
    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: link.url,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "link desktop-card",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
          className: "desktop",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: `title desktop-card ${placeholder ? "placeholder" : ""}`,
            children: helpers/* filter.string */.hX.string(name, 40)
          }), labels && helpers/* print.labels */.S0.labels(labels)]
        })
      })
    }, `desktop-${index}`);
  });
}
;
;// CONCATENATED MODULE: ./components/trello/cards/resume.js





function ResumeCards({
  title
}) {
  const trello = (0,external_react_redux_.useSelector)(({
    trello
  }) => trello);
  let content = trello.ready ? helpers/* filter.trello */.hX.trello(trello, title) : helpers/* filter.out.hero */.hX.out.hero(trello.projects.cards);
  content = content.filter((_, index) => index < 3);
  return content.map((card, index) => {
    const placeholder = card.placeholder ? "placeholder" : "";
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
      className: "resume-card",
      children: [card.labels && helpers/* print.labels */.S0.labels(card.labels), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "wrap resume-card-title",
        children: [helpers/* print.resume.name */.S0.resume.name(card), helpers/* print.resume.dates */.S0.resume.dates(card)]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `copy resume-card ${placeholder}`,
        children: helpers/* filter.string */.hX.string(card.desc)
      })]
    }, `resume-card-${index}`);
  });
}
;
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(5777);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-bootstrap/Badge"
var Badge_ = __webpack_require__(4939);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(9015);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
;// CONCATENATED MODULE: ./components/folder.js







function Folder({
  title,
  target,
  input,
  output
}) {
  const tl = external_gsap_default().timeline({
    defaults: {
      duration: 0.2,
      ease: "power1.in"
    }
  });

  function toggleState() {
    if (input) {
      tl.to(target, {
        scale: 0.5
      }).set(target, {
        opacity: 0
      });
      output(!input);
    } else {
      tl.set(target, {
        opacity: 1
      }).to(target, {
        scale: 1
      });
      output(!input);
    }
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "component folder",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Button_default()), {
      onClick: toggleState,
      className: "folder",
      variant: "link",
      children: [input ? /*#__PURE__*/jsx_runtime_.jsx(icons/* FolderOpenSvg */.l9, {}) : /*#__PURE__*/jsx_runtime_.jsx(icons/* FolderClosedSvg */.fU, {}), /*#__PURE__*/jsx_runtime_.jsx((Badge_default()), {
        className: "folder",
        pill: true,
        children: title
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/downloads.js



function Downloads({
  ready,
  type,
  url,
  name,
  downloads
}) {
  const placeholder = !ready ? "placeholder" : "";
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "component downloads",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      className: `link downloads ${placeholder}`,
      href: url,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "block downloads --svg",
        children: type === "gem" ? /*#__PURE__*/jsx_runtime_.jsx(logos/* GemLogo */.B5, {}) : /*#__PURE__*/jsx_runtime_.jsx(logos/* NpmLogo */.yy, {})
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "block downloads --info",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `title downloads-title ${placeholder}`,
          children: name
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `title downloads-figure ${placeholder}`,
          children: downloads
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(8622);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(3406);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);
// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__(7707);
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_);
;// CONCATENATED MODULE: ./components/rows/biography.js






function BiographyRow() {
  return /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
    className: "page-row",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Row_default()), {
      className: "page-row",
      children: [/*#__PURE__*/jsx_runtime_.jsx((Col_default()), {
        className: "resume-biography",
        children: /*#__PURE__*/jsx_runtime_.jsx(TrelloPage, {
          name: "Biography"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Col_default()), {
        className: "resume-social",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "link social",
          href: "https://github.com/paulheading",
          children: "Github"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "link social",
          href: "https://teamtreehouse.com/paulheading",
          children: "Treehouse"
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/rows/cards.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function CardsRow(props) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Container, {
    className: "page-row",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
      className: "page-row --cards",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        className: "full-width",
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "title resume-row",
          children: props.title
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ResumeCards, _objectSpread({}, props))]
    })
  });
}
;
;// CONCATENATED MODULE: ./components/rows/name.js



function NameRow() {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Container, {
    className: "page-row",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
      className: "page-row",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        className: "resume-name",
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "title resume-row",
          children: "Paul Heading"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
        className: "resume-address",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "address resume-row",
          children: "Hackney, London"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "link resume-row",
          href: "mailto:hello@paulh.biz?subject=Hello!",
          children: "hello@paulh.biz"
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./scripts/getters/index.js + 10 modules
var getters = __webpack_require__(7898);
// EXTERNAL MODULE: ./store/actions.js
var actions = __webpack_require__(5053);
;// CONCATENATED MODULE: ./components/rows/skills.js







function SkillsRow() {
  const store = {
    treehouse: (0,external_react_redux_.useSelector)(({
      treehouse
    }) => treehouse)
  };
  const write = (0,external_react_redux_.useDispatch)();

  const printSkills = () => {
    let points = store.treehouse.points;
    let list = Object.keys(points);
    list = list.sort((a, b) => {
      if (points[a] > points[b]) return -1;
      if (points[a] < points[b]) return 1;
      return 0;
    });
    return list.map((topic, index) => {
      const value = points[topic];
      const classes = store.treehouse.ready ? "points purple" : "points placeholder";

      if (topic !== "total") {
        return value >= 100 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Badge, {
          className: classes,
          children: [topic, " ", value]
        }, `topic-${index}`);
      }

      return null;
    });
  };

  (0,external_react_.useEffect)(() => (async () => write((0,actions/* treehouse */.KD)(await getters/* default.Treehouse */.Z.Treehouse())))(), [write]);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Container, {
    className: "page-row",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
      className: "page-row --points",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        className: "full-width",
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "title resume-row",
          children: "Skills"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        className: "skills",
        children: printSkills()
      })]
    })
  });
}
;
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2470);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./components/status.js




function Status({
  start,
  due,
  dueComplete
}) {
  start = external_moment_default()(start);
  due = due ? external_moment_default()(due) : external_moment_default()();
  let span = external_moment_default()(due).diff(start, "months");
  span = span > 1 ? `${span} Months` : `${span} Month`;
  const invalid = "Invalid date";
  const project = {
    due: () => dueComplete ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Badge, {
      className: "project-due split",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "Finished"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: due.format("MMM YYYY")
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Badge, {
      className: "project-due bg-dark",
      children: "In progress"
    }),
    span: () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Badge, {
      className: "project-span split",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "Lasted"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: span
      })]
    })
  };
  project.due.displayName = 'ProjectDue';
  project.span.displayName = 'ProjectSpan';

  if (due !== invalid && start !== invalid) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "component status",
      children: [project.due(), project.span()]
    });
  }

  return null;
}
;// CONCATENATED MODULE: ./components/index.js














/***/ }),

/***/ 3552:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "tf": function() { return /* reexport */ AddCardSvg; },
  "YA": function() { return /* reexport */ DotsSvg; },
  "fU": function() { return /* reexport */ FolderClosedSvg; },
  "l9": function() { return /* reexport */ FolderOpenSvg; },
  "kF": function() { return /* reexport */ Wifi; }
});

// UNUSED EXPORTS: PauseSvg, PlaySvg

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./icons/dots.js

function DotsSvg() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    height: "24",
    width: "24",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
    })
  });
}
;// CONCATENATED MODULE: ./icons/addcard.js

function AddCardSvg() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    height: "24",
    width: "24",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"
    })
  });
}
;// CONCATENATED MODULE: ./icons/folder/Open.js


function FolderOpenSvg() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 468.293 468.293",
    height: "72",
    width: "72",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M192.403,79.736v-27.93c0-3.039-2.464-5.503-5.503-5.503H83.666c-3.039,0-5.503,2.464-5.503,5.503\tv27.93H38.784c-6.079,0-11.006,4.928-11.006,11.006v247.535h412.738V90.742c0-6.079-4.928-11.006-11.006-11.006H192.403z",
      fill: "#FCD462"
    }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
      x: "66.248",
      y: "110.642",
      width: "335.772",
      height: "105.566",
      fill: "#D5D6DB"
    }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
      x: "99.453",
      y: "135.243",
      width: "269.362",
      height: "80.921",
      fill: "#EBF0F3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M397.716,421.99H70.576c-15.476,0-28.705-11.141-31.339-26.391L0.094,168.908\tc-0.671-3.888,2.322-7.443,6.268-7.443h455.568c3.945,0,6.939,3.555,6.268,7.443l-39.143,226.69\tC426.422,410.849,413.193,421.99,397.716,421.99z",
      fill: "#F6C358"
    })]
  });
}
;// CONCATENATED MODULE: ./icons/folder/Closed.js


function FolderClosedSvg() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 468.293 468.293",
    height: "72",
    width: "72",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M29.525,50.447h111.996c7.335,0,14.11,3.918,17.77,10.274l18.433,25.181\tc3.66,6.356,10.436,10.274,17.77,10.274h272.798v287.495c0,15.099-12.241,27.34-27.34,27.34H27.34\tC12.241,411.011,0,398.77,0,383.671V128.068c0-21.133,3.265-42.14,9.68-62.276l0,0C12.03,56.755,20.188,50.447,29.525,50.447z",
      fill: "#F6C358"
    }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
      x: "42.615",
      y: "91.473",
      width: "359.961",
      height: "152.058",
      fill: "#EBF0F3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M447.788,64.117H334.927c-8.026,0-15.315,4.683-18.65,11.983l-19.313,42.267\tc-3.336,7.3-10.624,11.983-18.65,11.983H0v260.155c0,15.099,12.241,27.34,27.34,27.34h413.613c15.099,0,27.34-12.241,27.34-27.34\tV84.622C468.293,73.298,459.112,64.117,447.788,64.117z",
      fill: "#FCD462"
    })]
  });
}
;// CONCATENATED MODULE: ./icons/pause.js


function PauseSvg() {
  return /*#__PURE__*/_jsxs("svg", {
    className: "svg pause",
    xmlns: "http://www.w3.org/2000/svg",
    height: "40px",
    viewBox: "0 0 24 24",
    width: "40px",
    fill: "#000000",
    children: [/*#__PURE__*/_jsx("path", {
      d: "M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z"
    }), /*#__PURE__*/_jsx("path", {
      d: "M11,16H9V8h2V16z M15,16h-2V8h2V16z",
      fill: "#FFFFFF"
    })]
  });
}
;// CONCATENATED MODULE: ./icons/play.js


function PlaySvg() {
  return /*#__PURE__*/_jsxs("svg", {
    className: "svg play",
    xmlns: "http://www.w3.org/2000/svg",
    height: "40px",
    viewBox: "0 0 24 24",
    width: "40px",
    fill: "#000000",
    children: [/*#__PURE__*/_jsx("path", {
      d: "M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z"
    }), /*#__PURE__*/_jsx("path", {
      d: "M10,16.5v-9l6,4.5L10,16.5z",
      fill: "#FFFFFF"
    })]
  });
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./scripts/animations/index.js + 3 modules
var animations = __webpack_require__(2781);
;// CONCATENATED MODULE: ./icons/wifi.js




function Wifi() {
  const wifi = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => animations/* desktop.signal */.gv.signal(wifi.current), []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    ref: wifi,
    xmlns: "http://www.w3.org/2000/svg",
    className: "wifi-svg",
    viewBox: "0 0 40 40",
    height: "40",
    width: "40",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "low",
      d: "M15,28.3l5,5l5-5C22.2,25.6,17.8,25.6,15,28.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "medium",
      d: "M8.3,21.7l3.3,3.3c4.6-4.6,12.1-4.6,16.7,0l3.3-3.3C25.2,15.2,14.8,15.2,8.3,21.7z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "high",
      d: "M1.7,15L5,18.3c8.3-8.3,21.7-8.3,30,0l3.3-3.3C28.2,4.9,11.8,4.9,1.7,15z"
    })]
  });
}
;
;// CONCATENATED MODULE: ./icons/index.js
// import CheckBoxBlank from "./Checkbox/Blank";
// import CheckBoxDone from "./Checkbox/Done";
// import ExitSvg from "./Exit";

 // import BurgerSvg from "./Burger";
// import RightArrowSvg from "./RightArrow";








/***/ }),

/***/ 6199:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d2": function() { return /* reexport */ ArticleLayout; },
  "yX": function() { return /* reexport */ CreditLayout; },
  "Hi": function() { return /* reexport */ DesktopLayout; },
  "GT": function() { return /* reexport */ EmailLayout; },
  "$_": function() { return /* reexport */ FooterBlock; },
  "Fb": function() { return /* reexport */ CustomHead; },
  "gb": function() { return /* reexport */ LoadingLayout; },
  "or": function() { return /* reexport */ Layout; },
  "R_": function() { return /* reexport */ MarqueeLayout; },
  "W_": function() { return /* reexport */ NavigationLayout; },
  "TX": function() { return /* reexport */ NotFoundLayout; },
  "ZA": function() { return /* reexport */ TopbarLayout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./layouts/head.js



function CustomHead({
  title,
  keywords,
  desc
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "keywords",
      content: keywords
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: desc
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "author",
      content: "Paul Heading"
    })]
  });
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./store/actions.js
var actions = __webpack_require__(5053);
;// CONCATENATED MODULE: ./hooks/width.js



function WidthHook() {
  const write = (0,external_react_redux_.useDispatch)();
  (0,external_react_.useEffect)(() => {
    let resize;
    write((0,actions/* width */.bf)(window.innerWidth));
    window.addEventListener("resize", () => {
      clearTimeout(resize);
      resize = setTimeout(() => write((0,actions/* width */.bf)(window.innerWidth)), 0);
    });
  }, [write]);
  return null;
}
;
;// CONCATENATED MODULE: ./hooks/count.js



function CountHook() {
  const store = {
    trello: (0,external_react_redux_.useSelector)(({
      trello
    }) => trello),
    count: (0,external_react_redux_.useSelector)(({
      count
    }) => count),
    hero: (0,external_react_redux_.useSelector)(({
      hero
    }) => hero)
  };
  const write = (0,external_react_redux_.useDispatch)();
  const ready = store.trello.ready;
  const feed = store.hero.feed;
  const speed = 4000;
  (0,external_react_.useEffect)(() => {
    if (ready) {
      if (store.count > 0) {
        const other = setInterval(() => write((0,actions/* count */.QX)(store.count - 1)), speed);
        return () => clearInterval(other);
      } else {
        return setTimeout(() => write((0,actions/* count */.QX)(feed.length - 1)), speed);
      }
    }
  }, [ready, feed, store.count, write]);
  return null;
}
;
// EXTERNAL MODULE: ./scripts/helpers/index.js + 2 modules
var helpers = __webpack_require__(2110);
;// CONCATENATED MODULE: ./hooks/hero.js




function HeroHook() {
  const store = {
    hero: (0,external_react_redux_.useSelector)(({
      hero
    }) => hero),
    pause: (0,external_react_redux_.useSelector)(({
      pause
    }) => pause),
    trello: (0,external_react_redux_.useSelector)(({
      trello
    }) => trello),
    count: (0,external_react_redux_.useSelector)(({
      count
    }) => count)
  };
  const write = (0,external_react_redux_.useDispatch)();
  const ready = store.trello.ready;
  const cards = store.trello.projects.cards;
  (0,external_react_.useEffect)(() => {
    const feed = helpers/* filter.in.hero */.hX.in.hero(cards);

    if (ready) {
      write((0,actions/* hero */.rP)({
        feed,
        card: feed[store.count]
      }));
    }
  }, [write, ready, cards, store.count, store.pause]);
  return null;
}
;
// EXTERNAL MODULE: ./scripts/getters/index.js + 10 modules
var getters = __webpack_require__(7898);
;// CONCATENATED MODULE: ./hooks/desktop.js




function DesktopHook() {
  const write = (0,external_react_redux_.useDispatch)();
  (0,external_react_.useEffect)(() => {
    (async () => {
      const data = {
        npm: await getters/* default.Npm */.Z.Npm(),
        gem: await getters/* default.Gem */.Z.Gem(),
        spotify: await getters/* default.Spotify */.Z.Spotify(),
        trello: await getters/* default.Trello */.Z.Trello()
      };

      if (data.npm) {
        write((0,actions/* npm */._u)(data.npm));
      }

      if (data.gem) {
        write((0,actions/* gem */.BV)(data.gem));
      }

      if (data.spotify) {
        write((0,actions/* spotify */.NA)(data.spotify));
      }

      if (data.trello) {
        write((0,actions/* trello */.BJ)(data.trello));
      }
    })();
  }, [write]);
  return null;
}
;// CONCATENATED MODULE: ./hooks/index.js

 // import ScrollHook from "./scroll";




;// CONCATENATED MODULE: ./layouts/main.js




function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "component layout",
    children: [/*#__PURE__*/jsx_runtime_.jsx(WidthHook, {}), /*#__PURE__*/jsx_runtime_.jsx(CountHook, {}), /*#__PURE__*/jsx_runtime_.jsx(HeroHook, {}), /*#__PURE__*/jsx_runtime_.jsx(NavigationLayout, {}), children, /*#__PURE__*/jsx_runtime_.jsx(MarqueeLayout, {}), /*#__PURE__*/jsx_runtime_.jsx(TopbarLayout, {}), /*#__PURE__*/jsx_runtime_.jsx(DesktopLayout, {}), /*#__PURE__*/jsx_runtime_.jsx(EmailLayout, {}), /*#__PURE__*/jsx_runtime_.jsx(FooterBlock, {})]
  });
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./logos/index.js + 6 modules
var logos = __webpack_require__(7316);
;// CONCATENATED MODULE: ./layouts/navigation.js







function NavigationLayout() {
  const path = (0,router_.useRouter)().pathname;
  const width = (0,external_react_redux_.useSelector)(({
    width
  }) => width);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `component navigation-block ${helpers.is.home(path)}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container navigation-block",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "wrap logo",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "link logo",
            children: helpers.is.small(width) ? /*#__PURE__*/jsx_runtime_.jsx(logos/* PaulH.mobile */.LW.mobile, {}) : /*#__PURE__*/jsx_runtime_.jsx(logos/* PaulH.desktop */.LW.desktop, {})
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "wrap navigation-block",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "button navigation-block",
            children: "About"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/resume",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "link navigation-block",
            children: "Resume"
          })
        })]
      })]
    })
  });
}
;
// EXTERNAL MODULE: ./scripts/animations/index.js + 3 modules
var animations = __webpack_require__(2781);
// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__(7051);
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);
;// CONCATENATED MODULE: ./layouts/marquee.js








function MarqueeLayout() {
  const store = {
    trello: (0,external_react_redux_.useSelector)(({
      trello
    }) => trello),
    pause: (0,external_react_redux_.useSelector)(({
      pause
    }) => pause),
    count: (0,external_react_redux_.useSelector)(({
      count
    }) => count),
    hero: (0,external_react_redux_.useSelector)(({
      hero
    }) => hero)
  };
  const ref = {
    target: (0,external_react_.useRef)(null),
    wrap: (0,external_react_.useRef)(null)
  };
  const card = store.hero.card;
  (0,external_react_.useEffect)(() => store.pause ? animations/* marquee.tl.pause */.ZN.tl.pause() : animations/* marquee.scroll */.ZN.scroll(ref.wrap.current), [store.pause, ref.wrap]);
  (0,external_react_.useEffect)(() => store.pause ? animations/* marquee.tl.pause */.ZN.tl.pause() : animations/* marquee.tl.restart */.ZN.tl.restart(), [store.pause, store.trello, store.count]);
  const print = {
    title: more => {
      const name = helpers/* remove.hero */.Od.hero(card.name);
      let items = [];

      if (!card.marquee) {
        card.marquee = name;
      }

      card.marquee = external_html_react_parser_default()(card.marquee);

      for (let index = 0; index < 10; index++) {
        items.push( /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "title marquee",
          children: card.marquee
        }, index));
      }

      return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: more.url,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "link marquee",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "wrap marquee",
            ref: ref.wrap,
            children: items
          })
        })
      });
    },
    tab: link => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: link.url,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "link marquee-tab",
        children: link.name
      })
    })
  };
  const more = helpers/* filter.in.more */.hX.in.more(card.attachments);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "layout marquee",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container marquee-tab",
      children: print.tab(more)
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container marquee",
      children: print.title(more)
    })]
  });
}
;
// EXTERNAL MODULE: ./icons/index.js + 7 modules
var icons = __webpack_require__(3552);
;// CONCATENATED MODULE: ./layouts/topbar.js







function TopbarLayout() {
  const store = {
    timezone: (0,external_react_redux_.useSelector)(({
      timezone
    }) => timezone)
  };
  const placeholder = !store.timezone.ready ? "placeholder" : "";
  const write = (0,external_react_redux_.useDispatch)();
  (0,external_react_.useEffect)(() => (async () => {
    const data = await getters/* default.Timezone */.Z.Timezone();

    if (data) {
      write((0,actions/* timezone */.Dg)(data));
    }
  })(), [write]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "component topbar-block",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `status topbar-block ${placeholder}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: store.timezone.location
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "status topbar-block",
      children: /*#__PURE__*/jsx_runtime_.jsx(icons/* Wifi */.kF, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `status topbar-block ${placeholder}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: store.timezone.time
      })
    })]
  });
}
;
// EXTERNAL MODULE: ./components/index.js + 12 modules
var components = __webpack_require__(1835);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(9015);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: external "gsap/dist/Draggable"
var Draggable_ = __webpack_require__(3812);
;// CONCATENATED MODULE: ./layouts/desktop.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import Button from "react-bootstrap/Button";


 // import { PauseSvg, PlaySvg } from "icons";




function DesktopLayout() {
  const store = {
    pause: (0,external_react_redux_.useSelector)(({
      pause
    }) => pause),
    gem: (0,external_react_redux_.useSelector)(({
      gem
    }) => gem),
    npm: (0,external_react_redux_.useSelector)(({
      npm
    }) => npm)
  };
  const ref = {
    desktop: (0,external_react_.useRef)(null),
    spotify: (0,external_react_.useRef)(null),
    trello: (0,external_react_.useRef)(null)
  };
  const {
    0: spotifyFolder,
    1: setSpotifyFolder
  } = (0,external_react_.useState)(true);
  const {
    0: trelloFolder,
    1: setTrelloFolder
  } = (0,external_react_.useState)(true);
  (0,external_react_.useEffect)(() => {
    external_gsap_default().registerPlugin(Draggable_.Draggable);

    const makeDraggable = target => Draggable_.Draggable.create(target.children);

    makeDraggable(ref.desktop.current);
  }, [ref.desktop]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "component desktop-block",
    children: [/*#__PURE__*/jsx_runtime_.jsx(DesktopHook, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container desktop-block",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "wrap desktop-block",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          ref: ref.desktop,
          className: "container desktop-windows",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "position spotify-feed",
            ref: ref.spotify,
            children: /*#__PURE__*/jsx_runtime_.jsx(components/* SpotifyFeed */.PB, {})
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "position trello-feed",
            ref: ref.trello,
            children: /*#__PURE__*/jsx_runtime_.jsx(components/* TrelloFeed */.as, {})
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "container desktop-folders",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "wrap desktop-folders",
            children: [/*#__PURE__*/jsx_runtime_.jsx(components/* Folder */.gt, {
              title: "Spotify",
              target: ref.spotify.current,
              input: spotifyFolder,
              output: setSpotifyFolder
            }), /*#__PURE__*/jsx_runtime_.jsx(components/* Folder */.gt, {
              title: "Trello",
              target: ref.trello.current,
              input: trelloFolder,
              output: setTrelloFolder
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(components/* Downloads */.ie, _objectSpread({}, store.gem)), /*#__PURE__*/jsx_runtime_.jsx(components/* Downloads */.ie, _objectSpread({}, store.npm))]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(CreditLayout, {})]
  });
}
;
// EXTERNAL MODULE: external "react-bootstrap/Badge"
var Badge_ = __webpack_require__(4939);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);
;// CONCATENATED MODULE: ./layouts/credit.js



function CreditLayout() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "component credit-block",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Badge_default()), {
      className: "credit-block",
      pill: true,
      children: ["Icons made by ", /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://www.flaticon.com/authors/dinosoftlabs",
        className: "credit-block",
        title: "DinosoftLabs",
        children: "DinosoftLabs"
      })]
    })
  });
}
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
;// CONCATENATED MODULE: ./layouts/email.js



function email_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function email_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { email_ownKeys(Object(source), true).forEach(function (key) { email_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { email_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function email_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function EmailLayout() {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)();
  const {
    0: formSuccess,
    1: setFormSuccess
  } = (0,external_react_.useState)(false);

  const encode = data => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");

  const onSubmit = form => {
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encode(email_objectSpread({
        "form-name": "contact"
      }, form))
    }).then(() => setFormSuccess(true)).catch(error => alert(error));
  };

  const print = {
    error: {
      from: () => {
        const type = errors.from.type;

        if (type === "pattern") {
          return "This email address isn't valid";
        }

        if (type === "required") {
          return "Please fill in your email address";
        }
      }
    }
  };
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "component email-block",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container email-block",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "wrap email-block",
        children: [formSuccess && /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Alert, {
          variant: "success",
          onClose: () => setFormSuccess(false),
          dismissible: true,
          children: "sent!"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "topbar email-block",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "btn close-btn"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "btn minimise-btn"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          className: "form email-block",
          onSubmit: handleSubmit(onSubmit),
          "data-netlify": "true",
          name: "contact",
          method: "post",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row email-block --tag",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "field-title",
              children: "To"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "field-value tag",
              children: "hello@paulh.biz"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row email-block --input",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: "field-title",
              children: "Subject"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", email_objectSpread(email_objectSpread({
              className: "field-value subject",
              placeholder: "Hey there!"
            }, register("subject")), {}, {
              type: "text"
            }))]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row email-block --input",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: "field-title",
              children: "From"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", email_objectSpread(email_objectSpread({}, register("from", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
            })), {}, {
              placeholder: "friendly@visitor.org",
              className: "field-value email",
              type: "text"
            })), errors.from && /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "alert email-block --from",
              children: print.error.from()
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row email-block --text-field",
            children: /*#__PURE__*/jsx_runtime_.jsx("textarea", email_objectSpread(email_objectSpread({}, register("message")), {}, {
              placeholder: "Message",
              rows: "4"
            }))
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row email-block --submit",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
              variant: "link",
              type: "submit",
              children: "Submit"
            })
          })]
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./layouts/footer.js


function FooterBlock() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "component footer-block",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container footer-block",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "title footer-block",
        children: "Say hello :)"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "link footer-block",
        href: "mailto:hello@paulh.biz",
        children: "hello@paulh.biz"
      })]
    })
  });
}
;
// EXTERNAL MODULE: ./scripts/seo.js
var seo = __webpack_require__(4627);
;// CONCATENATED MODULE: ./layouts/notfound.js



function notfound_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function notfound_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { notfound_ownKeys(Object(source), true).forEach(function (key) { notfound_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { notfound_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function notfound_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function NotFoundLayout() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "component not-found",
    children: [/*#__PURE__*/jsx_runtime_.jsx(CustomHead, notfound_objectSpread({}, seo/* default.not_found */.Z.not_found)), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container feed-content",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "wrap feed-content",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "title feed-content",
          children: "Page Not Found \uD83E\uDD2C"
        }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
          className: "subtitle feed-content",
          children: "uh oh! where da page gone?"
        })]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./layouts/loading.js




function LoadingLayout() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "component load-route",
    children: [/*#__PURE__*/jsx_runtime_.jsx(CustomHead, {
      title: helpers/* print.seo */.S0.seo("Loading route")
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container feed-content",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "wrap feed-content",
        children: helpers/* print.placeholders */.S0.placeholders(5)
      })
    })]
  });
}
;
;// CONCATENATED MODULE: ./layouts/article.js



function article_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function article_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { article_ownKeys(Object(source), true).forEach(function (key) { article_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { article_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function article_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function ArticleLayout({
  name,
  desc,
  attachments,
  start,
  due
}) {
  name = helpers/* remove.hero */.Od.hero(name);
  const live = helpers/* filter.in.live */.hX.in.live(attachments);
  const code = helpers/* filter.in.code */.hX.in.code(attachments);
  const dates = {
    start,
    due
  };
  const seo = {
    title: helpers/* print.seo */.S0.seo(name),
    desc
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "component about-content",
    children: [/*#__PURE__*/jsx_runtime_.jsx(CustomHead, article_objectSpread({}, seo)), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container feed-content",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "wrap feed-content",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: name
        }), /*#__PURE__*/jsx_runtime_.jsx(components/* Status */.qb, article_objectSpread({}, dates)), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "summary feed-content",
          children: [live && /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: live.url,
            children: "See project"
          }), code && /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: code.url,
            children: "See code"
          })]
        }), desc && external_html_react_parser_default()(desc)]
      })
    })]
  });
}
;
;// CONCATENATED MODULE: ./layouts/index.js














/***/ }),

/***/ 7316:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B5": function() { return /* reexport */ GemSvg; },
  "yy": function() { return /* reexport */ NpmSvg; },
  "LW": function() { return /* reexport */ paulh; },
  "qk": function() { return /* reexport */ SpotifySvg; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./logos/gem.js

function GemSvg() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    version: "1.1",
    className: "svg ruby-gem",
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    viewBox: "0 0 200 200",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M68.8,69.9L68.8,69.9L46.5,92l53.9,53.8l22.2-22.1L154.3,92l-22.2-22.2v-0.1H68.7L68.8,69.9z M100.2,10.6l-78.5,45v90l78.5,45l78.5-45v-90L100.2,10.6z M163.7,137l-63.5,36.6L36.7,137V64l63.5-36.6L163.7,64V137z",
      fill: "#010101"
    })
  });
}
;// CONCATENATED MODULE: ./logos/npm.js

function NpmSvg() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    className: "svg npm",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "15.2",
    viewBox: "0 0 200 76",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M65.6,67h23.1V55.5h23.1V9.3H65.6V67z M88.7,20.9h11.5v23.1H88.7V20.9z M121,9.3v46.2H144V20.9h11.5v34.6h11.5V20.9h11.5\tv34.6h11.5V9.3H121z M10.2,55.5h23.1V20.9h11.5v34.6h11.5V9.3H10.2V55.5z"
    })
  });
}
;// CONCATENATED MODULE: ./logos/spotify.js

function SpotifySvg() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    className: "spotify-svg",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 167.5 167.5",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M83.7,0C37.5,0,0,37.5,0,83.7c0,46.3,37.5,83.7,83.7,83.7c46.3,0,83.7-37.5,83.7-83.7C167.5,37.5,130,0,83.7,0\tC83.7,0,83.7,0,83.7,0z M122.1,120.8c-1.5,2.5-4.7,3.2-7.2,1.7c-19.7-12-44.4-14.7-73.6-8.1c-2.8,0.6-5.6-1.1-6.2-3.9\tc-0.6-2.8,1.1-5.6,3.9-6.2c31.9-7.3,59.3-4.2,81.3,9.3C122.9,115.1,123.7,118.3,122.1,120.8z M132.4,98c-1.9,3.1-5.9,4-9,2.2\tC100.9,86.3,66.6,82.3,40,90.4c-3.5,1-7.1-0.9-8.1-4.3c-1-3.5,0.9-7.1,4.4-8.1c30.4-9.2,68.2-4.8,94.1,11.1\tC133.3,90.9,134.3,94.9,132.4,98L132.4,98z M133.3,74.2c-27-16-71.5-17.5-97.3-9.7c-4.1,1.3-8.5-1.1-9.8-5.2\tc-1.3-4.1,1.1-8.5,5.2-9.8c29.6-9,78.8-7.2,109.8,11.2c3.7,2.2,4.9,7,2.7,10.7C141.8,75.2,137,76.4,133.3,74.2L133.3,74.2z"
    })
  });
}
;// CONCATENATED MODULE: ./logos/paulh/desktop.js

function DesktopLogo() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "logo paulh",
    viewBox: "0 0 1110 420",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M815.8,349.5c-16,1-32,1-48,1c-22,0-44,1-66-1c-6-1-16-11-16-16c3-50,6-101,12-150c4-39-7-55-45-53c-2-12-3-24-8-35\tc-8-19-22-22-39-11c-16,10-17,27-19,43c-4,37-9,75-17,111c-7,29-18,58-30,86c-7,16-18,15-28,0c-3-6-6-11-8-17c-10-29-10-59-8-90\tc1-13-7-29-15-40c-2-4-19-3-27,0c-15,7-24,18-20,37c3,16,2,32,2,50c-21-29-40-56-62-82c-16-18-35-27-59-20c-9,2-34,15-34,15\tc0-2,0-3,0-5c0-13-14-51-16-62c-17-74-124-120-185-89c-18,10-38,21-55,32c-5,4-9,12-9,18c-2,29-5,59-8,91c-1,25-7,52-2,76\tc8,46,21,92,32,137c5,20,23,30,41,26c15-3,24-20,22-39c-1-16-6-31-7-47c-3-38-2-38,35-44c3-1,7-1,10-2c28-9,36-4,84-27\tc0,6,1,13,0,21c-2,30-6,59-7,88c-1,21,12,37,30,38c19,1,30-11,34-35c0-6,1-10,1-15c1-13,8-20,21-18c41,6,82,12,114,40c7,4,19,7,26,4\tc17-7,28,0,38,12c12,15,26,21,46,19c31-3,48-24,62-47c25-43,29-90,38-137c2-9,6-19,8-29l7,1c0,11,1,21,0,32c-3,45-8,90-10,134\tc-2,34,15,56,48,57c47,2,94-2,141-4c18-1,24-15,22-30C840.8,361.5,834.8,349.5,815.8,349.5z M194.8,183.5c-25,22-55,30-87,32\tc-16,1-24-6-25-23c-1-26-5-52-5-78c0-35,13-45,47-41c30,3,55,17,71,31C221.8,126.5,220.8,161.5,194.8,183.5z M361.8,273.5\tc-15-2-28-3-41-6c-6-1-16-7-16-10c1-9,6-18,11-25c3-3,16-4,19-1c12,10,21,22,32,35L361.8,273.5z M934.3,68.6\tc-8.2-17.4-3.1-22.5-3.1-22.5c13.3-17.4,34.7-28.6,44.9-10.2c20.4,36.8,40.8,74.5,57.2,113.3c24.5,59.2,44.9,117.4,66.4,176.7\tc6.1,15.3-8.2,35.7-23.5,36.8c-16.3,3.1-35.7-9.2-37.8-27.6c-3.1-20.4-4.1-40.8-7.1-60.2c-9.2-44.9-21.4-50-54.1-19.4\tc-31.7,28.6-60.2,62.3-51.1,111.3c3.1,18.4-9.2,33.7-24.5,34.7c-17.4,0-26.5-11.2-27.6-31.7c0-21.4-1-43.9-1-66.4\tc0-15.3-8.2-15.3-20.4-13.3c-18.4,4.1-36.8,6.1-55.1,8.2c-12.3,1-26.5-3.1-28.6-15.3c-1-9.2,4.1-21.4,10.2-29.6\tc12.3-16.3,26.5-30.6,39.8-46c25.5-27.6,34.7-57.2,22.5-93.9c-5.1-13.3,1-23.5,11.2-31.7c15.3-11.2,25.5-9.2,34.7,7.1\tc2,2,10.2,20.4,10.2,38.8s2,32.7,2,49c0,14.3,4.1,35.7,5.1,36.8c2,8.2,8.2,10.2,18.4,6.1c0,0,20.4-5.1,30.6-15.3\ts13.3-14.3,16.3-30.6c1.4-8,1.1-15.9,0.2-22.2c-1-7.4-9.8-28.3-13-35C947,95.3,937.4,76.3,934.3,68.6z"
    })
  });
}
;// CONCATENATED MODULE: ./logos/paulh/mobile.js

function MobileLogo() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "logo paulh",
    viewBox: "0 0 600 420",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M426.1,69.1c-8.2-17.4-3.1-22.5-3.1-22.5c13.3-17.4,34.7-28.6,44.9-10.2c20.4,36.8,40.8,74.5,57.2,113.3\tc24.5,59.2,44.9,117.4,66.4,176.7c6.1,15.3-8.2,35.7-23.5,36.8c-16.3,3.1-35.7-9.2-37.8-27.6c-3.1-20.4-4.1-40.8-7.1-60.2\tc-9.2-44.9-21.4-50-54.1-19.4c-31.7,28.6-60.2,62.3-51.1,111.3c3.1,18.4-9.2,33.7-24.5,34.7c-17.4,0-26.5-11.2-27.6-31.7\tc0-21.4-1-43.9-1-66.4c0-15.3-8.2-15.3-20.4-13.3c-18.4,4.1-36.8,6.1-55.1,8.2c-12.3,1-26.5-3.1-28.6-15.3\tc-1-9.2,4.1-21.4,10.2-29.6c12.3-16.3,26.5-30.6,39.8-46c25.5-27.6,34.7-57.2,22.5-93.9c-5.1-13.3,1-23.5,11.2-31.7\tc15.3-11.2,25.5-9.2,34.7,7.1c2,2,10.2,20.4,10.2,38.8s2,32.7,2,49c0,14.3,4.1,35.7,5.1,36.8c2,8.2,8.2,10.2,18.4,6.1\tc0,0,20.4-5.1,30.6-15.3s13.3-14.3,16.3-30.6c1.4-8,1.1-15.9,0.2-22.2c-1-7.4-9.8-28.3-13-35C438.8,95.8,429.2,76.8,426.1,69.1z M124.8,73.5c-35-3-47,7-47,41c0,26,3,52,5,78c1,17,9,24,25,23c32-2,62-10,87-32s26-58,1-79C179.8,90.5,154.8,76.5,124.8,73.5z M224.8,241.5c-51,25-58,20-86,29c-3,1-7,1-10,2c-37,6-38,6-35,44c1,16,6,31,7,47c2,20-7,36-22,39c-18,3-37-7-41-26\tc-12-45-24-91-32-137c-5-24,1-51,2-76c3-33,6-63,8-92c0-7,5-15,9-18c17-11,37-22,55-32c61-31,168,15,186,90c2,12,16,49,16,62\tc0,13-3,26-12,35C260.8,218.5,245.8,230.5,224.8,241.5z"
    })
  });
}
;// CONCATENATED MODULE: ./logos/paulh/index.js


const PaulH = {
  desktop: DesktopLogo,
  mobile: MobileLogo
};
/* harmony default export */ var paulh = (PaulH);
;// CONCATENATED MODULE: ./logos/index.js






/***/ }),

/***/ 2781:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gv": function() { return /* reexport */ desktop; },
  "rP": function() { return /* reexport */ hero; },
  "ZN": function() { return /* reexport */ animations_marquee; }
});

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(9015);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: external "gsap/dist/DrawSVGPlugin"
var DrawSVGPlugin_ = __webpack_require__(5841);
;// CONCATENATED MODULE: ./scripts/animations/hero.js


external_gsap_default().registerPlugin(DrawSVGPlugin_.DrawSVGPlugin);
const tl = external_gsap_default().timeline({
  defaults: {
    duration: 2
  }
});

const tl0 = (pause, target) => {
  if (pause) {
    tl.pause();
  } else {
    target = target.children[0];
    tl.clear().from(target.children[0], {
      drawSVG: "0%",
      repeat: -1,
      repeatDelay: 1
    });
  }
};

const tl1 = (pause, target) => {
  if (pause) {
    tl.pause();
  } else {
    target = target.children[0];
    tl.clear().set(target.children[0], {
      drawSVG: "0%"
    }).to(target.children[0], {
      drawSVG: "100%"
    });
  }
};

const tl2 = (pause, target) => {
  if (pause) {
    tl.pause();
  } else {
    target = target.children[0];
    const path = {
      main: target.children[0],
      side: target.children[1]
    };
    tl.clear().set(path.side, {
      opacity: 0
    }).set(path.main, {
      scale: 0.1,
      strokeWidth: 0
    }).to(path.side, {
      opacity: 1,
      stagger: 0.2,
      duration: 0.4
    }, "together").to(path.main, {
      scaleX: 1,
      duration: 0.8
    }, "together").to(path.main, {
      scaleY: 1,
      duration: 0.6,
      ease: "power1.in",
      onComplete: () => external_gsap_default().set(path.main, {
        strokeWidth: 2
      })
    }, "together+=0.2");
  }
};

/* harmony default export */ var hero = ({
  tl0,
  tl1,
  tl2
});
;// CONCATENATED MODULE: ./scripts/animations/desktop.js


const signal = target => {
  const tl = external_gsap_default().timeline({
    delay: 0.7,
    repeat: -1,
    defaults: {
      duration: 0.1,
      stagger: 0.3,
      delay: 0.7
    }
  });
  const low = target.children[0];
  const medium = target.children[1];
  const high = target.children[2];
  tl.to([low, medium, high], {
    opacity: 1
  }).to([high, medium], {
    opacity: 0.5
  }).to([medium], {
    opacity: 1
  }).to([medium], {
    opacity: 0.5
  }).to([medium, high], {
    opacity: 1
  }).to([high, medium, low], {
    opacity: 0.5
  });
};

/* harmony default export */ var desktop = ({
  signal
});
;// CONCATENATED MODULE: ./scripts/animations/marquee.js
 // 60px per second

const marquee = {
  tl: external_gsap_default().timeline({
    defaults: {
      ease: "none",
      duration: 8,
      repeat: 5
    }
  }),
  scroll: target => marquee.tl.to(target, {
    x: -480
  })
};
/* harmony default export */ var animations_marquee = (marquee);
;// CONCATENATED MODULE: ./scripts/animations/index.js





/***/ }),

/***/ 7898:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ getters; }
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./scripts/getters/gem.js

function Gem() {
  return external_axios_default().get("https://rubygems.org/api/v1/gems/futuro", {
    headers: {
      Accept: "application/json"
    }
  }).then(({
    data
  }) => {
    data = {
      downloads: data.downloads,
      ready: true,
      type: "gem",
      name: data.name,
      url: data.project_uri
    };
    console.log("gem: ", data);
    return data;
  }).catch(err => console.log(err));
}
;// CONCATENATED MODULE: ./scripts/getters/github.js

function Github() {
  return external_axios_default().get("https://api.github.com/users/paulheading/repos", {
    headers: {
      Accept: "application/json"
    }
  }).then(({
    data
  }) => {
    console.log("github: ", data);
    return data;
  }).catch(err => console.log(err));
}
// EXTERNAL MODULE: ./scripts/helpers/index.js + 2 modules
var helpers = __webpack_require__(2110);
;// CONCATENATED MODULE: ./scripts/getters/medium.js


const RSS2JSON = {
  API_KEY: "fmyclz0krhtddmmkrguka2qk6zwycsx3rtx7dp7i"
};
async function getMedium() {
  return await external_axios_default().get("https://api.rss2json.com/v1/api.json", {
    params: {
      rss_url: "https://medium.com/feed/@paulheading",
      api_key: RSS2JSON.API_KEY
    }
  }).then(({
    data
  }) => {
    data = data.items.map((item, index) => {
      item.id = `medium-${index}`;
      item.date = item.pubDate;
      item.type = "blog";
      item.path = `${(0,helpers/* pathify */.mi)(item.title)}`;
      item.url = `/${item.type}/${item.path}`;
      delete item.pubDate;
      delete item.enclosure;
      return item;
    });
    console.log("medium: ", data);
    return data;
  }).catch(err => console.error(err));
}
;// CONCATENATED MODULE: ./scripts/getters/npm.js

function getNpm() {
  return external_axios_default().get("https://api.npms.io/v2/package/barbican-reset", {
    headers: {
      Accept: "application/json"
    }
  }).then(({
    data
  }) => {
    data = data.collected;
    data = {
      downloads: data.npm.downloads[5].count,
      ready: true,
      type: "npm",
      name: data.metadata.name,
      url: data.metadata.links.npm
    };
    console.log("npm: ", data);
    return data;
  }).catch(err => console.log(err));
}
;// CONCATENATED MODULE: ./scripts/getters/reddit.js


function getToken() {
  return fetch("https://oauth.reddit.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(`_fUH34HX4kU9fA:QkYYpjtPsp6SP9O0zb28pACPBd81vw`)
    },
    body: "grant_type=authorization_code&code=CODE&redirect_uri=URI"
  }).then(res => res.json()).then(res => res.access_token).catch(err => console.error(err));
}

async function getReddit() {
  const token = await getToken();
  return await external_axios_default().get(`https://www.reddit.com/api/v1/me`, {
    headers: {
      Authorization: "Bearer " + token
    }
  }).then(({
    data
  }) => {
    return data;
  }).catch(err => {
    console.error(err);
  });
}
;// CONCATENATED MODULE: ./scripts/getters/spotify.js

const SPOTIFY = {
  USER_ID: "pheading86",
  PLAYLIST_ID: "1BTGIMCoaxVTLVAz2BcFsY",
  CLIENT_ID: "30a7191314fb49d4b56579de3eb7c05c",
  CLIENT_SECRET: "dcc629385ce4482b89a9af883fc66cc2",
  TOKEN_BASE: "https://accounts.spotify.com/api/token",
  API_BASE: "https://api.spotify.com/v1"
};

function spotify_getToken() {
  return fetch(SPOTIFY.TOKEN_BASE, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(`${SPOTIFY.CLIENT_ID}:${SPOTIFY.CLIENT_SECRET}`)
    },
    body: "grant_type=client_credentials"
  }).then(res => res.json()).then(res => res.access_token).catch(err => console.error(err));
}

async function spotifyData(target = `/users/${SPOTIFY.USER_ID}`) {
  const token = await spotify_getToken();
  return await external_axios_default().get(`${SPOTIFY.API_BASE}${target}`, {
    headers: {
      Authorization: "Bearer " + token
    }
  }).then(({
    data
  }) => data).catch(err => console.error(err));
}

async function getSpotify() {
  let data = await spotifyData(`/playlists/${SPOTIFY.PLAYLIST_ID}`);

  if (!data) {
    console.log("failed to getSpotify");
    return null;
  } else {
    if (data.error) {
      console.log("failed to getSpotify");
      return null;
    } else {
      data = {
        ready: true,
        profile: `https://open.spotify.com/user/${data.owner.display_name}`,
        tracks: data.tracks.items.map(({
          track
        }) => ({
          artist: {
            url: track.artists[0].external_urls.spotify,
            name: track.artists[0].name
          },
          url: track.external_urls.spotify,
          name: track.name
        })),
        playlist: {
          image: data.images[1].url,
          owner: data.owner.display_name,
          name: data.name,
          url: data.external_urls.spotify
        }
      };
      console.log("spotify: ", data);
      return data;
    }
  }
}
;// CONCATENATED MODULE: ./scripts/getters/timezone.js

function getTimezone() {
  return external_axios_default().get('/api/timezone').then(({
    data
  }) => {
    console.log("timezone: ", data);
    return data;
  }).catch(err => console.log(err));
}
;// CONCATENATED MODULE: ./scripts/getters/treehouse.js

const TREEHOUSE_API = "https://teamtreehouse.com/paulheading.json";
function getTreehouse() {
  return external_axios_default().get(TREEHOUSE_API, {
    headers: {
      Accept: "application/json"
    }
  }).then(({
    data
  }) => {
    data = {
      ready: true,
      badges: data.badges,
      points: data.points,
      profile_name: data.profile_name,
      profile_url: data.profile_url
    };
    console.log("treehouse: ", data);
    return data;
  });
}
// EXTERNAL MODULE: external "showdown"
var external_showdown_ = __webpack_require__(5060);
var external_showdown_default = /*#__PURE__*/__webpack_require__.n(external_showdown_);
// EXTERNAL MODULE: ./scripts/animations/index.js + 3 modules
var animations = __webpack_require__(2781);
;// CONCATENATED MODULE: ./scripts/getters/trello.js




const converter = new (external_showdown_default()).Converter();
const TRELLO = {
  USER_ID: "5574934f557c7e43e5d2e79d",
  BOARD_ID: "5fb002b217fa6a2ca13512f7",
  LIST: {
    PAGES: "606801d7d3dea356e76acca7",
    HERO: "5fb17de4dc88020816ac9d45",
    PROJECTS: "5fb2238ca12fa82e01b9c819",
    ROLES: "5fcfcf0ce3266a31c9d16d38",
    EDUCATION: "5fb2640a3e5fc6395c87a038"
  },
  API_KEY: "42cb30954bb40b7751e85e81562353ef",
  USER_TOKEN: "de734b6acd32d372941c0460791b799057d84dd4078631842cc17b63ba047468",
  API_BASE: "https://api.trello.com/1/"
};

const trelloData = target => external_axios_default().get(`${TRELLO.API_BASE}${target}?key=${TRELLO.API_KEY}&token=${TRELLO.USER_TOKEN}`, {
  headers: {
    Accept: "application/json"
  }
}).then(({
  data
}) => data).catch(err => console.error(err));

const promiseData = target => Promise.all(target).then(data => data);

const getCardsOnList = (id = TRELLO.LIST.HERO) => trelloData(`list/${id}/cards/`);

const getSvgsOnCard = actions => {
  let result = null;
  actions.forEach(({
    data
  }) => {
    if (data.text) {
      if (data.text.startsWith("`<svg")) {
        result = data.text.slice(1, -1);
      }
    }
  });
  return result;
};

const attachAnimation = card => card.animation = (pause, target) => {
  switch (card.id) {
    case "6073409c74b96c31fb853842":
      return animations/* hero.tl2 */.rP.tl2(pause, target);

    default:
      return animations/* hero.tl1 */.rP.tl1(pause, target);
  }
};

const getCardData = async (id, list) => {
  let data = await getCardsOnList(id);

  if (!data) {
    return null;
  } else {
    data = data.map(async card => {
      const actions = await trelloData(`cards/${card.id}/actions`);
      const attachments = await trelloData(`cards/${card.id}/attachments`);
      const route = `/article/${(0,helpers/* pathify */.mi)(list)}/${(0,helpers/* pathify */.mi)(helpers/* remove.hero */.Od.hero(card.name))}`;
      card.route = route;
      card.actions = actions;
      card.attachments = attachments;
      card.list = {
        name: list
      };
      card.desc = converter.makeHtml(card.desc);

      if (list !== "Pages") {
        card.attachments.push({
          name: "Read more",
          url: route
        });
      }

      card.svg = getSvgsOnCard(actions);
      card.class = `card-${card.id}`;
      card.placeholder = false;
      attachAnimation(card);
      return card;
    });
    return promiseData(data);
  }
};

const getList = async (id = TRELLO.LIST.HERO) => {
  let data = await trelloData(`lists/${id}`);
  return !data ? null : {
    id: data.id,
    name: data.name
  };
};

async function getTrello() {
  const data = {
    pages: {
      info: await getList(TRELLO.LIST.PAGES),
      cards: await getCardData(TRELLO.LIST.PAGES, "Pages")
    },
    projects: {
      info: await getList(TRELLO.LIST.PROJECTS),
      cards: await getCardData(TRELLO.LIST.PROJECTS, "Projects")
    },
    roles: {
      info: await getList(TRELLO.LIST.ROLES),
      cards: await getCardData(TRELLO.LIST.ROLES, "Roles")
    },
    education: {
      info: await getList(TRELLO.LIST.EDUCATION),
      cards: await getCardData(TRELLO.LIST.EDUCATION, "Education")
    }
  };

  if (!data.projects.cards) {
    console.log("failed to trelloData");
    return null;
  } else {
    data.ready = true;
    console.log("trello: ", data);
    return data;
  }
}
;
;// CONCATENATED MODULE: ./scripts/getters/udemy.js

function getUdemy() {
  const yourtoken = `mmvjnbIZE4F99cXwrlBYqN8booW8NSTGlv9avrtD:fOC2smZ7WlzupWWtDJv5xPHZYj6jrPbsy8vrpX4H9PzRCq1NEdVp8wenMNU0XhlROsFFUYmH7tQat0jkOeWrbm6285eCtyQPp62qf0FDs8Q83WEtFNO6aXlU7XZS6J9q`;
  return external_axios_default().get("https://www.udemy.com/api-2.0/courses/238934", {
    headers: {
      Authorization: yourtoken
    }
  }).then(({
    data
  }) => data).catch(err => console.error(err));
}
;// CONCATENATED MODULE: ./scripts/getters/index.js










/* harmony default export */ var getters = ({
  Gem: Gem,
  Github: Github,
  Medium: getMedium,
  Npm: getNpm,
  Reddit: getReddit,
  Spotify: getSpotify,
  Timezone: getTimezone,
  Treehouse: getTreehouse,
  Trello: getTrello,
  Udemy: getUdemy
});

/***/ }),

/***/ 2110:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "hX": function() { return /* reexport */ helpers_filter; },
  "is": function() { return /* binding */ is; },
  "mi": function() { return /* binding */ pathify; },
  "S0": function() { return /* reexport */ helpers_print; },
  "Od": function() { return /* binding */ remove; }
});

// UNUSED EXPORTS: breakpoints, localify, object, simplify

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__(7051);
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);
;// CONCATENATED MODULE: ./scripts/helpers/filter.js

const filter = {};
filter.in = {
  hero: value => value.filter(({
    name
  }) => name.startsWith("Hero: ")),
  more: value => value.filter(({
    name
  }) => name === "Read more")[0],
  live: value => value.filter(({
    name
  }) => name === "Live")[0],
  code: value => value.filter(({
    name
  }) => name === "Code")[0]
};
filter.out = {
  hero: value => value.filter(({
    name
  }) => !name.startsWith("Hero: "))
};

filter.string = (title, limit = 140) => {
  if (title.length > limit) {
    title = title.slice(0, limit) + '...';
  }

  return external_html_react_parser_default()(title);
};

filter.trello = (trello, title) => {
  let results = null;
  Object.entries(trello).forEach(entry => {
    const [key, value] = entry;

    if (key !== "ready") {
      if (value.info.name === title) {
        results = value.cards;
      }
    }
  });
  return results;
};

/* harmony default export */ var helpers_filter = (filter);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2470);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./scripts/helpers/print.js







const print = {};

print.seo = content => `Paul Heading | ${content} | Full Stack Designer`;

print.placeholders = count => {
  let content = "";

  for (let index = 0; index < count; index++) {
    content += "<p class='placeholder'>.</p>";
  }

  return external_html_react_parser_default()(content);
};

print.label = {
  time: span => {
    if (span > 11) {
      span = Math.round(span / 12 * 10) / 10;
      return span > 1 ? `${span} years` : `${span} year`;
    } else {
      return span > 1 ? `${span} months` : `${span} month`;
    }
  },
  dates: (card, color) => {
    const due = card.due ? external_moment_default()(card.due) : external_moment_default()();

    if (card.start) {
      const start = external_moment_default()(card.start);
      const span = external_moment_default()(due).diff(start, "months");
      return /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Badge, {
        className: `outline ${color}`,
        children: print.label.time(span)
      });
    } else {
      return /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Badge, {
        className: `outline ${color}`,
        children: "tbc"
      });
    }
  }
};

print.labels = labels => labels.length ? labels.map(({
  color,
  name
}, index) => /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Badge, {
  className: color,
  children: name
}, `label-${index}`)) : /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Badge, {
  children: "Personal"
});

print.resume = {
  name: ({
    name,
    attachments,
    placeholder
  }) => {
    attachments = helpers_filter.in.more(attachments);
    name = remove.hero(name);
    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: attachments.url,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "link resume-card",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: `title resume-card ${placeholder ? "placeholder" : ""}`,
          children: external_html_react_parser_default()(name)
        })
      })
    });
  },
  dates: card => {
    const placeholder = card.placeholder ? "placeholder" : "";
    const list = card.list.name;
    const date = list !== "Roles" ? external_moment_default()(card.due) : external_moment_default()(card.start);
    const handle = list !== "Roles" ? "Finished" : "Started";

    const hasFinished = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
        children: [handle, ":"]
      }), " ", date.format(`MMM YYYY`)]
    });

    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `title resume-card-due ${placeholder}`,
      children: card.due ? hasFinished() : "Ongoing"
    });
  }
};
/* harmony default export */ var helpers_print = (print);
;// CONCATENATED MODULE: ./scripts/helpers/index.js





const object = {
  ready: target => {
    const keys = Object.keys(target).length;
    return keys > 0 ? true : false;
  },
  key: value => Object.keys(value).toString()
};
const simplify = value => value.replace(/[!@£$%^&*):('.`]/g, "");
const pathify = value => simplify(value).split(" ").join("-").toLowerCase();
const localify = url => {
  if (!url.startsWith("http")) {
    return url;
  } else {
    url = url.split("//");
    return `/${url[1]}`;
  }
};
const is = {
  home: path => "/" === path ? "is-home" : "not-home",
  small: value => value < breakpoints.sm ? true : false,
  medium: value => value < breakpoints.md ? true : false,
  linkLocal: (link, name = link.name) => link.local ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    to: link.url,
    children: name
  }) : /*#__PURE__*/jsx_runtime_.jsx("a", {
    href: link.url,
    children: name
  })
};
const breakpoints = {
  xs: 416,
  sm: 520,
  md: 768,
  lg: 960,
  xl: 1200,
  xxl: 1600
};
const remove = {
  hero: value => value.startsWith("Hero: ") ? value.replace("Hero: ", "") : value
};

/***/ }),

/***/ 4627:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const seo = {
  home: {
    title: "Paul Heading | Portfolio | Full Stack Designer",
    keywords: "portfolio, full stack designer, react, vue, frameworks, barbican, london",
    desc: "I'm a Full Stack Designer. I design and build with the React.js and Vue.js frameworks. I currently work for the Barbican in London and have just over 1 years experience"
  },
  about: {
    title: "Paul Heading | About | Full Stack Designer",
    keywords: "portfolio, full stack designer, react, vue, gsap, netlify, trello",
    desc: "I built this site using React.js, GSAP for animations, Netlify for form handling and several external api's. I use Trello as my CMS and pull data from Spotify, Medium, Github and TeamTreehouse"
  },
  blog: {
    title: "Paul Heading | Blog | Full Stack Designer",
    desc: "I'm still writing this bit... You know how it is. I fully intend to begin writing tantilising design nuggets over at https://paulheading.medium.com/"
  },
  resume: {
    title: "Paul Heading | Resume | Full Stack Designer",
    keywords: "portfolio, full stack designer, bourne st, teamtreehouse, london",
    desc: "I've been a designer for the last 10 years, becoming a front-end designer in the last year. My title 'Full Stack Designer', reflects my focus on user experience and animation. I currently work for the Barbican in London, as well as on freelance projects such as https://36bournestreet.com. Last year, I completed my Full Stack Techdegree, with https://teamtreehouse.com"
  },
  not_found: {
    title: "Paul Heading | 404 | Full Stack Designer",
    keywords: "portfolio, full stack designer, react, vue, frameworks, barbican, london",
    desc: "Oh no... this page is missing. Maybe the url is incorrect? If you think something is broken, please email me: hello@paulh.biz"
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (seo);

/***/ }),

/***/ 5053:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rP": function() { return /* binding */ hero; },
/* harmony export */   "bf": function() { return /* binding */ width; },
/* harmony export */   "QX": function() { return /* binding */ count; },
/* harmony export */   "_u": function() { return /* binding */ npm; },
/* harmony export */   "BV": function() { return /* binding */ gem; },
/* harmony export */   "Dg": function() { return /* binding */ timezone; },
/* harmony export */   "BJ": function() { return /* binding */ trello; },
/* harmony export */   "NA": function() { return /* binding */ spotify; },
/* harmony export */   "bW": function() { return /* binding */ github; },
/* harmony export */   "KD": function() { return /* binding */ treehouse; }
/* harmony export */ });
/* unused harmony exports test, pause, menu, medium */
const test = query => ({
  type: "TEST",
  payload: query
});
const hero = query => ({
  type: "HERO",
  payload: query
});
const pause = query => ({
  type: "PAUSE",
  payload: query
});
const menu = query => ({
  type: "MENU",
  payload: query
});
const width = query => ({
  type: "WIDTH",
  payload: query
});
const count = query => ({
  type: "COUNT",
  payload: query
});
const npm = query => ({
  type: "NPM",
  payload: query
});
const gem = query => ({
  type: "GEM",
  payload: query
});
const timezone = query => ({
  type: "TIMEZONE",
  payload: query
});
const trello = query => ({
  type: "TRELLO",
  payload: query
});
const medium = query => ({
  type: "MEDIUM",
  payload: query
});
const spotify = query => ({
  type: "SPOTIFY",
  payload: query
});
const github = query => ({
  type: "GITHUB",
  payload: query
});
const treehouse = query => ({
  type: "TREEHOUSE",
  payload: query
});

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;