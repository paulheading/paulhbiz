import { Link } from "react-router-dom";
import filter from "./_filter";
import print from "./_print";

export { filter, print };

export const object = {
  ready: target => {
    const keys = Object.keys(target).length;
    return keys > 0 ? true : false;
  },
  key: value => Object.keys(value).toString()
};

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

export const is = {
  home: path => "/" === path ? "is-home" : "not-home",
  small: value => value < breakpoints.sm ? true : false,
  medium: value => value < breakpoints.md ? true : false,
  linkLocal: (link, name = link.name) => link.local ? <Link to={link.url}>{name}</Link> : <a href={link.url}>{name}</a>
};

export const breakpoints = {
  xs: 416,
  sm: 520,
  md: 768,
  lg: 960,
  xl: 1200,
  xxl: 1600,
};

export const remove = {
  hero: value => value.startsWith("Hero: ") ? value.replace("Hero: ","") : value,
}