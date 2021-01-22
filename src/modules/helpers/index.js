import Badge from "react-bootstrap/Badge";
import { printSummary } from "./summary";
import { marquee } from "../animations";

export { printSummary };

export const parse = require("html-react-parser");

export function linkBadges(card) {
  const links = card.attachments;
  if (links.length > 0) {
    return (
      <a className="card__link-badge" href={links[0].url} key={card.id}>
        {handleBadges(card.labels)}
      </a>
    );
  } else {
    return handleBadges(card.labels);
  }
}

export function handleBadges(labels) {
  if (labels.length > 0) {
    return labels.map((label) => {
      return (
        <Badge key={label.id} className={label.color}>
          {label.name}
        </Badge>
      );
    });
  } else {
    return <Badge>Personal</Badge>;
  }
}

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

export function doesItemExist(feed, path) {
  let result = {
    exists: false,
    data: null,
  };
  feed.forEach((item) => {
    if (item.path === path) {
      result.exists = true;
      result.data = item;
    }
  });
  return result;
}

export function calcRepeat() {
  const target = document.querySelector(marquee.target);
  return Math.ceil((window.innerWidth + 500) / target.offsetWidth);
}

export function gradient(x, y, rotate = 160) {
  return `linear-gradient(${rotate}deg, ${x} 0%, ${y} 100%)`;
}

export function isHome(path) {
  return "/" === path ? "is-home" : "not-home";
}

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const isSmall = (value) => {
  return value < breakpoints.sm ? true : false;
};

export function ifTrue(test, positive, negative) {
  return test ? positive : negative;
}
