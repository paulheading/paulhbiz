import { marquee } from "modules/animations";
import { Link } from "react-router-dom";

export const parse = require("html-react-parser");

export function objectReady(target) {
  const keys = Object.keys(target).length;
  return keys > 0 ? true : false;
}

export const objectKey = value => Object.keys(value).toString();

export const pathify = value => simplify(value).split(" ").join("-").toLowerCase();

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
  linkLocal: (link, name = link.name) => link.local ? <Link to={link.url}>{name}</Link> : <a href={link.url}>{name}</a>
};

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const limitLength = (title, limit = 140) => title.length > limit ? `${title.slice(0, limit)} ...` : title;

export const remove = {
  hero: value => value.startsWith("Hero: ") ? value.replace("Hero: ","") : value,
}

export const filter = {
  in: {
    hero: value => value.filter(({ name }) => name.startsWith("Hero: ")),
    more: value => value.filter(({ name }) => name === "Read more")[0],
    live: value => value.filter(({ name }) => name === "Live")[0],
    code: value => value.filter(({ name }) => name === "Code")[0]
  },
  out: {
    hero: value => value.filter(({ name }) => !name.startsWith("Hero: ")),
  }  
}

export const seo = {
  title: content => `Paul Heading | ${ content } | Full Stack Designer`
};