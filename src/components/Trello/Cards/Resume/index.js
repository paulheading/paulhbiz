import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { object, remove, filter, limitLength, print } from "modules/helpers";
import { Col } from "react-bootstrap";
import parse from "html-react-parser";

function ResumeCards({ source, total = 3, title }) {

  const linkName = card => {
    if (title === "Projects") {
      const more = filter.in.more(card.attachments);
      const name = remove.hero(card.name);
      return <Link className="link trello-card-resume" to={more.url}>{parse(name)}</Link>;
    } else {
      return <span className="title trello-card-resume">{parse(card.name)}</span>;
    }
  }

  const printDates = card => {
    const date = title !== "Roles" ? moment(card.due) : moment(card.start);
    const handle = title !== "Roles" ? "Finished" : "Started";
    const hasFinished = () => <span><strong>{handle}:</strong> {date.format(`MMM YYYY`)}</span>;
    
    return <div className="due trello-card-resume">{ card.due ?  hasFinished() : "Ongoing" }</div>;
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
        {card.labels && print.labels(card)}
        <div className="wrap trello-card-resume-title">
          {linkName(card)}
          {printDates(card)}
        </div>
        <div className="desc trello-card-resume">
          {parse(limitLength(card.desc))}
        </div>
      </Col>
    );
  }

  const cardContents = source => !object.ready(source) ? printPlaceholders() : source.map((card,index) => index < total ? printCard(card) : null);

  return cardContents(source);
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ResumeCards);
