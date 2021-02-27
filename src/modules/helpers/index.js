import { marquee } from "@/modules/animations";

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

export function objectKey(value) {
  return Object.keys(value).toString();
}

export function pathify(value) {
  value = simplify(value);
  return value.split(" ").join("-").toLowerCase();
}

export function simplify(value) {
  return value.replace(/[!@£$%^&*):('.`]/g, "");
}

export function localify(url) {
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
  home: (path) => {
    return "/" === path ? "is-home" : "not-home";
  },
  small: (value) => {
    return value < breakpoints.sm ? true : false;
  },
};

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};
