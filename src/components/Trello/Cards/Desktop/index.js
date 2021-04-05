import React from "react";
import moment from "moment";
import { connect, useSelector } from "react-redux";
import { objectReady, parse } from "modules/helpers";
import { Badge, Card } from "react-bootstrap";

function getCards(trello,source) {
  switch (source) {
    case "Education": return trello.education.cards;
    case "Roles": return trello.roles.cards;
    default: return trello.projects.cards;
  }
}

function TrelloCards({ source, total = 3, date = false }) {
  const trello = useSelector((state) => state.trelloData);
  const hasDate = date ? "has-date" : "";
  const ready = objectReady(trello);

  function printDate(due) {
    return (<div className="title trello-card-date">{ due ? moment(due).format("MMM YYYY") : "Coming Soon" }</div>);
  }

  function printLabels(labels) {
    if (labels.length) {
      return labels.map(label =><Badge key={label.id} className={label.color}>{label.name}</Badge>);
    } else {
      return <Badge>Personal</Badge>;
    }
  }

  function linkName(card,url) {
    if (url) {
      return <a className="link trello-card" href={url}>{parse(card.name)}</a>;
    } else {
      return <span className="card__title">{parse(card.name)}</span>;
    }
  }

  function cardContents() {
    if (!ready) {
      const cards = [];
      for (let index = 0; index < total; index++) {
        cards.push( 
        <Card className={`trello-card ${hasDate}`} key={`placeholder-${index}`}>
          <div className="title trello-card placeholder">.</div>
          <div className="desc trello-card placeholder">.</div>
        </Card>
        );
      }
      return cards;
    } else {
      return getCards(trello, source).map((card,index) => {
        const url = card.attachments.map(item => item.name === "Live" && item.url)[0];
        if (index < total) {
          return (
            <Card className={`trello-card ${hasDate}`} key={card.id}>
              { date && printDate(card.due) }
              <div className="wrap trello-card-inner">
                {linkName(card,url)}
                <span className="wrap trello-card-badges">
                  {card.attachments.map((item,index) => {
                    return item.name === "Code" && <Badge className="code" key={`repo-${index}`}><a href={item.url}>Code</a></Badge>;
                  })}
                  {card.labels && printLabels(card.labels)}
                </span>
              </div>
            </Card>
          );
        }
        return null;
      });
    }
  }

  return cardContents();
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(TrelloCards);
