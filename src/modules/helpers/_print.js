import { remove, filter } from "modules/helpers";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import moment from "moment";

const print = {};

print.seo = content => `Paul Heading | ${ content } | Full Stack Designer`;

print.placeholders = count => {
  let content = "";
  for (let index = 0; index < count; index++) { content += "<p class='placeholder'>.</p>"; }
  return parse(content);
};

print.label = {
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
  }
}

print.labels = labels => labels.length ? labels.map(({color,name}, index) => <Badge key={`label-${index}`} className={color}>{name}</Badge>) : <Badge>Personal</Badge>;

print.resume = {
  name: card => {
    const placeholder = card.placeholder ? "placeholder" : "";
    const more = filter.in.more(card.attachments);
    const name = remove.hero(card.name);
    
    return (
      <Link className="link resume-card" to={more.url}>
        <span className={`title resume-card ${placeholder}`}>{parse(name)}</span>
      </Link>
    );
  },
  dates: card => {
    const placeholder = card.placeholder ? "placeholder" : "";
    const list = card.list.name;
    const date = list !== "Roles" ? moment(card.due) : moment(card.start);
    const handle = list !== "Roles" ? "Finished" : "Started";
    const hasFinished = () => <span><strong>{handle}:</strong> {date.format(`MMM YYYY`)}</span>;

    return (
      <div className={`title resume-card-due ${placeholder}`}>
        { card.due ?  hasFinished() : "Ongoing" }
      </div>
    );
  }
}

export default print;