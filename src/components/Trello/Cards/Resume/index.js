import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { objectReady, parse, remove, filter } from "modules/helpers";
import { Badge, Col } from "react-bootstrap";

function ResumeCards({ source, total = 3, title }) {

  const printLabels = card => {
    const labels = card.labels;

    function createDates(color) {
      const due = card.due ? moment(card.due) : moment();

      if (card.start) {
        const start = moment(card.start);
        const span = moment(due).diff(start, "months");
        const months = span > 1 ? "months" : "month";
        return <Badge className={`outline ${color}`}>{span} {months}</Badge>;
      } else {
        return <Badge className={`outline ${color}`}>tbc</Badge>;
      }
    } 

    if (labels.length) {
      let color = "";
      return (
        <div>
          {labels.map(label => {
            color = label.color;
            return <Badge key={label.id} className={label.color}>{label.name}</Badge>;
          })}
          { createDates(color) }
        </div>
      );
    } else {
      return (
        <div>
          <Badge>Personal</Badge>
          { createDates() }
        </div>
      );
    }
  }

  const linkName = card => {
    if (title === "Projects") {
      const more = filter.in.more(card.attachments);
      const name = remove.hero(card.name);
      return <Link className="link trello-card-resume" to={more.url}>{parse(name)}</Link>;
    } else {
      return <span className="title trello-card-resume">{parse(card.name)}</span>;
    }
  }

  function printDates(card) {
    const date = title !== "Roles" ? moment(card.due) : moment(card.start);
    const handle = title !== "Roles" ? "Finished" : "Started";
    return <div className="due trello-card-resume"><strong>{handle}:</strong> {date.format(`MMM YYYY`)}</div>;
  }

  const printPlaceholders = () => {
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
  }

  const printCard = card => {
    return (
      <Col sm={4} key={card.id}>
        {card.labels && printLabels(card)}
        <div className="wrap trello-card-resume-title">
          {linkName(card)}
          {printDates(card)}
        </div>
        <div className="desc trello-card-resume">
          {parse(card.desc)}
        </div>
      </Col>
    );
  }

  const cardContents = source => !objectReady(source) ? printPlaceholders() : source.map((card,index) => index < total ? printCard(card) : null);

  return cardContents(source);
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ResumeCards);
