import React from "react";
import moment from "moment";
import { connect, useSelector } from "react-redux";
import { objectReady, parse, remove } from "modules/helpers";
import { Badge, Col } from "react-bootstrap";

function ResumeCards({ source, total = 3 }) {
  const trello = useSelector(state => state.trelloData);
  const ready = objectReady(trello);

  function getTrelloCards() {
    switch (source) {
      case "Education": return trello.education.cards;
      case "Roles": return trello.roles.cards;
      default: return trello.projects.cards;
    }
  }

  function printLabels(labels) {
    if (labels.length) {
      return labels.map(label =><Badge key={label.id} className={label.color}>{label.name}</Badge>);
    } else {
      return <Badge>Personal</Badge>;
    }
  }

  function linkName(card,url) {
    const name = remove.hero(card.name);
    return url ? <a className="link trello-card-resume" href={url}>{parse(name)}</a> : <span className="title trello-card-resume">{name}</span>;
  }

  function printDue(card,due) {
    function printContent() {
      if (!card.placeholder) {
        return due !== "Invalid date" ? `(${due})` : "Coming Soon";        
      } else {
        return ".";
      }
    }
    return parse(`<span class="due trello-card-resume">${printContent()}</span>`);
  }

  function cardContents() {
    if (!ready) {
      const cards = [];
      for (let index = 0; index < total; index++) {
        cards.push( 
        <Col sm={4} key={`placeholder-${index}`}>
          <div className="title trello-card-resume placeholder">.</div>
          <div className="desc trello-card-resume placeholder">.</div>
        </Col>
        );
      }
      return cards;
    } else {
      return getTrelloCards().map((card, index) => {
        const url = card.attachments.map(item => item.name === "Live" && item.url)[0];
        const due = moment(card.due).format('MMM YYYY');
        if (index < total) {
          return (
            <Col sm={4} key={card.id}>
              {card.labels && printLabels(card.labels)}
              <div className="wrap trello-card-resume-title">
                {linkName(card,url)}
                {printDue(card,due)}     
              </div>
              <div className="desc trello-card-resume">
                {card.placeholder ? "." : parse(card.desc)}
              </div>
            </Col>
          );          
        }
        return null;
      });
    }
  }

  return cardContents();
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ResumeCards);
