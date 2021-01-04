import { handleBadges, handleDate, pathify } from "./index";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export function printSummary(feed) {
  if (!feed) {
    return (
      <div className="summary__container">
        {placeholder()}
        {placeholder()}
        {placeholder()}
      </div>
    );
  } else {
    return <div className="summary__container">{items(feed)}</div>;
  }
}

function placeholder() {
  return (
    <Card className="summary">
      <div className="summary__column date placeholder">.</div>
      <div className="summary__column labels placeholder">.</div>
      <div className="summary__column name placeholder">.</div>
    </Card>
  );
}

function items(feed) {
  return feed.map((item) => {
    return (
      <Card key={item.id} className={`summary ${ifType(item.type)}`}>
        <div className={`summary__column date ${ifType(item.type)}`}>
          {handleDate(item.date)}
        </div>
        {ifLabels(item.labels)}
        <div className={`summary__column name ${ifType(item.type)}`}>
          {item.title}
        </div>
        {ifUrl(item.url)}
      </Card>
    );
  });
}

function ifLabels(labels) {
  if (labels) {
    return <div className="summary__column labels">{handleBadges(labels)}</div>;
  } else {
    return null;
  }
}

function ifType(type) {
  return type ? type : "";
}

function ifUrl(url) {
  return url ? (
    <Link className="summary__column readmore" to={pathify(url)}>
      Read More
    </Link>
  ) : null;
}
