import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { objectReady, parse, remove, filter } from "modules/helpers";
import { Badge, Col } from "react-bootstrap";

function ResumeCards({ source, total = 3, finished = true }) {

  const printLabels = labels => labels.length ? labels.map(label =><Badge key={label.id} className={label.color}>{label.name}</Badge>) : <Badge>Personal</Badge>;

  const linkName = card => {
    const url = filter.in.live(card.attachments);
    const name = remove.hero(card.name);
    return url ? <a className="link trello-card-resume" href={url}>{parse(name)}</a> : <span className="title trello-card-resume">{parse(name)}</span>;
  }

  function printDates(card) {
    const date = finished ? moment(card.due) : moment(card.start);
    const handle = finished ? "Finished" : "Started";
    return parse(`<div class="due trello-card-resume"><strong>${handle}</strong>: ${date.format(`MMM YYYY`)}</div>`);
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

  const printCard = card => 
  <Col sm={4} key={card.id}>
    {card.labels && printLabels(card.labels)}
    <div className="wrap trello-card-resume-title">
      {linkName(card)}
      {printDates(card)}
    </div>
    <div className="desc trello-card-resume">
      {parse(card.desc)}
    </div>
  </Col>;

  const cardContents = source => !objectReady(source) ? printPlaceholders() : source.map((card,index) => index < total ? printCard(card) : null);

  return cardContents(source);
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ResumeCards);
