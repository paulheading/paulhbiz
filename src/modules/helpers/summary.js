import { handleBadges, handleDate, pathify } from "./index";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { RightArrowSvg } from "../../Components/SvgIcons";

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
    const body = (
      <Card.Body className={`${ifExists(item.type)}`}>
        {ifLabels(item.labels)}
        <div className={`summary-name ${ifExists(item.type)}`}>
          <div className="summary-title">{item.title}</div>
          <div className="summary-date">{handleDate.short(item.date)}</div>
        </div>
        {item.url ? <RightArrowSvg /> : null}
      </Card.Body>
    );
    return (
      <Card key={item.id} className={`summary ${ifExists(item.type)}`}>
        {item.url ? (
          <Link to={pathify(item.url)} className="summary-link">
            {body}
          </Link>
        ) : (
          body
        )}
      </Card>
    );
  });
}

function ifLabels(labels) {
  if (labels) {
    return (
      <span className="summary__column labels">{handleBadges(labels)}</span>
    );
  } else {
    return null;
  }
}

function ifExists(type) {
  return type ? type : "";
}
