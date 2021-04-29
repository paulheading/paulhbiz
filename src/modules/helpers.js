import { Badge } from "react-bootstrap";
import { marquee } from "modules/animations";
import { Link } from "react-router-dom";
import moment from "moment";

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

export const print = {
  label: {
    time: span => {
      if (span > 11) {
        span = Math.round((span / 12) * 10) / 10;
        return span > 1 ? `${span} years` : `${span} year`;
      } else {
        return span > 1 ? `${span} months` : `${span} month`; 
      }
    },
    dates: (card, color) => {
      const due = card.due ? moment(card.due) : moment();  
      if (card.start) {
        const start = moment(card.start);
        const span = moment(due).diff(start, "months");
        return <Badge className={`outline ${color}`}>{print.label.time(span)}</Badge>;
      } else {
        return <Badge className={`outline ${color}`}>tbc</Badge>;
      }
    },
  },
  labels: (card, date) => {
    const labels = card.labels;
    if (labels.length) {
      let color = "";
      return (
        <span>
          {labels.map(label => {
            color = label.color;
            return <Badge key={label.id} className={label.color}>{label.name}</Badge>;
          })}
          { date && print.label.dates(card, color) }
        </span>
      );
    } else {
      return (
        <span>
          <Badge>Personal</Badge>
          { date && print.label.dates(card) }
        </span>
      );
    }
  }
}