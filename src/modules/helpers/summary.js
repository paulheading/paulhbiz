import { handleDate } from "./index";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import { RightArrowSvg } from "../../Components/SvgIcons";

export function printSummary(feed) {
  if (feed) {
    return feed.map((item, index) => {
      const data = {
        live: true,
        labels: item.labels,
        title: item.title,
        date: item.date,
        link: item.link,
        type: item.type,
        index,
      };
      return printCard(data);
    });
  } else {
    const loop = ["1", "2", "3"];
    return loop.map((index) => {
      const data = {
        title: ".",
        index,
      };
      return printCard(data);
    });
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

function printCard(card) {
  const key = card.title + "-" + card.index;
  const ifLive = card.live ? "" : "placeholder";
  const ifType = card.type ? card.type : "";

  function ifDate() {
    if (card.date) {
      return <div className="summary-date">{handleDate.short(card.date)}</div>;
    }
  }

  function ifArrow() {
    if (card.link) {
      return <RightArrowSvg />;
    }
  }

  const body = (
    <Card.Body className={ifType}>
      {ifLabels(card.labels)}
      <div className={`summary-name ${ifLive} ${ifType}`}>
        <div className={`summary-title ${ifLive}`}>{card.title}</div>
        {ifDate()}
      </div>
      {ifArrow()}
    </Card.Body>
  );

  function ifLink() {
    if (card.link) {
      return (
        <a href={card.link} className="summary-link">
          {body}
        </a>
      );
    } else {
      return body;
    }
  }

  return (
    <Card key={key} className={`summary ${ifType}`}>
      {ifLink()}
    </Card>
  );
}

function ifLabels(labels) {
  if (labels) {
    return (
      <span className="summary__column labels">{handleBadges(labels)}</span>
    );
  }
}
