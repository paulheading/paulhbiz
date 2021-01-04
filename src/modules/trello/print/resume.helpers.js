import { objectReady, linkBadges, handleDate, parse } from "../../helpers";

export function resumeComponent(trello, list, title) {
  if (!objectReady(trello)) {
    return (
      <div className="page-content__row">
        <h2 className="column__title placeholder">.</h2>
        <div className="page-content__row triple">
          {placeholder()}
          {placeholder()}
          {placeholder()}
        </div>
      </div>
    );
  } else {
    return (
      <div className="page-content__row">
        <h2 className="column__title">{title}</h2>
        <div className="page-content__row triple">{cards(list)}</div>
      </div>
    );
  }
}

function placeholder() {
  return (
    <div className="component-resume-card">
      <div className="card__badge placeholder">.</div>
      <div className="card__name placeholder">.</div>
      <div className="card__description placeholder">.</div>
    </div>
  );
}

function cards(trello) {
  return trello.cards.map((card, index) => {
    if (index < 3) {
      return (
        <div className="component-resume-card" key={card.id}>
          {linkBadges(card)}
          <div className="card__name">
            {card.name}&nbsp;
            {certificateDate(card.due)}
          </div>
          <div className="card__description">{parse(card.desc)}</div>
        </div>
      );
    } else {
      return null;
    }
  });
}

function certificateDate(date) {
  date = handleDate(date);

  if (date === "Coming Soon") {
    return <span className="card__due">{`(${date})`}</span>;
  } else {
    date = date.split(" ");
    return (
      <span className="card__due">{`(${parse(date[1])} ${parse(
        date[3]
      )})`}</span>
    );
  }
}
