import React from "react";
import moment from "moment";
import { connect, useSelector } from "react-redux";
import { objectReady, parse } from "modules/helpers";
import { Badge, Card } from "react-bootstrap";

function TrelloCards({ total = 3, date = false }) {
  const trello = useSelector((state) => state.trelloData);
  const hasDate = date ? "has-date" : "";
  const ready = objectReady(trello);

  function printDate(due) {
    return (<div className="title trello-card-date">{ due ? moment(due).format("MMM YYYY") : "Coming Soon" }</div>);
  }

  function printLabels(labels) {
    if (labels.length) {
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

  function printPlaceholders() {
    const results = [];
    for (let index = 0; index < total; index++) { 
      results.push(<div className="card trello-card placeholder" key={`placeholder-${index}`}><div>.</div></div>); 
    }
    return results;
  }

  function printContents() {
    return trello.projects.cards.map((card, index)=>{
      const url = card.attachments.map(item => item.name === "Live" && item.url)[0];

      return index < total && (
          <Card className={`trello-card ${hasDate}`} key={card.id}>
            { date && printDate(card.due) }
            <div className="wrap trello-card-inner">
              <a className="link trello-card" href={url ? url : '#'}>
                {parse(card.name)}
              </a>
              <span className="wrap trello-card-badges">
                {card.attachments.map((item,index) => {
                  return item.name === "Code" && <Badge className="code" key={`repo-${index}`}><a href={item.url}>Code</a></Badge>;
                })}
                {card.labels && printLabels(card.labels)}
              </span>
            </div>
          </Card>
      );
    });
  }

  function printCards() {
    return ready ? printContents() : printPlaceholders();
  }

  return printCards();
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(TrelloCards);
