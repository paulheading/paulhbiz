import { marquee } from "modules/animations";

export const parse = require("html-react-parser");

export const handleDate = {
  basic: (timestamp) => {
    if (!timestamp) {
      return "Coming Soon";
    } else {
      timestamp = new Date(timestamp);
      return timestamp.toDateString();
    }
  },
  short: (date) => {
    date = handleDate.basic(date);
    if (date === "Coming Soon") {
      return `(${date})`;
    } else {
      date = date.split(" ");
      return `(${parse(date[1])} ${parse(date[3])})`;
    }
  },
};

export function objectReady(target) {
  const keys = Object.keys(target).length;
  return keys > 0 ? true : false;
}

export const objectKey = value => Object.keys(value).toString();

export function pathify(value) {
  value = simplify(value);
  return value.split(" ").join("-").toLowerCase();
}

export const simplify = value => value.replace(/[!@£$%^&*):('.`]/g, "");

export const localify = url => {
  if (!url.startsWith("http")) {
    return url;
  } else {
    url = url.split("//");
    return `/${url[1]}`;
  }
}

export function calcRepeat() {
  const target = document.querySelector(marquee.target);
  return Math.ceil((window.innerWidth + 500) / target.offsetWidth);
}

export const is = {
  home: path => "/" === path ? "is-home" : "not-home",
  small: value => value < breakpoints.sm ? true : false,
};

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const limitLength = (title, limit = 140) => title.length > limit ? `${title.slice(0, limit)} ...` : title;