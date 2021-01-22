import { objectReady, linkBadges, handleDate, parse } from "../index";
import Col from "react-bootstrap/Col";

export function projectData(feed, props) {
  if (!objectReady(feed)) {
    return {
      list: ["1", "2", "3"],
      placeholder: true,
      title: ".",
    };
  } else {
    return {
      list: selectList(feed, props),
      placeholder: false,
      title: props.title,
    };
  }
}

function selectList(feed, { title }) {
  switch (title) {
    case "Projects":
      return feed.projects.cards;
    case "Roles":
      return feed.roles.cards;
    default:
      return feed.education.cards;
  }
}

export function printProjects(data) {
  if (data.placeholder) {
    return data.list.map((_, id) => {
      const card = { id, placeholder: true };
      return printCard(card);
    });
  } else {
    return data.list.map((card, index) => {
      card.placeholder = false;
      if (index < 3) {
        return printCard(card);
      }
      return null;
    });
  }
}

function printCard(card) {
  return (
    <Col sm={4} key={card.id}>
      {card.placeholder ? null : linkBadges(card)}
      <div
        className={`card__name ${card.placeholder ? "placeholder" : "live"}`}
      >
        <span className="card__title">
          {card.placeholder ? "." : card.name}
        </span>
        <span className="card__due">
          {card.placeholder ? "." : handleDate.short(card.due)}
        </span>
      </div>
      <div
        className={`card__description ${
          card.placeholder ? "placeholder" : "live"
        }`}
      >
        {card.placeholder ? "." : parse(card.desc)}
      </div>
    </Col>
  );
}
