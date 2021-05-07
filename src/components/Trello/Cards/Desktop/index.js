import React from "react";
import moment from "moment";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { object, limitLength, filter, print } from "modules/helpers";
import { Card } from "react-bootstrap";
import parse from "html-react-parser";

function DesktopCards({ total = 3, date = false }) {
  const trello = useSelector(state => state.trello);
  const hasDate = date ? "has-date" : "";

  const printDate = due => <div className="date trello-card-desktop">{ due ? moment(due).format("MMM YYYY") : "Ongoing" }</div>;

  function cardContents() {
    if (!object.ready(trello)) {
      const cards = [];
      for (let index = 0; index < total; index++) {
        cards.push( 
        <Card className={`trello-card-desktop ${hasDate}`} key={`placeholder-${index}`}>
          <div className="title trello-card-desktop placeholder">.</div>
          <div className="desc trello-card-desktop placeholder">.</div>
        </Card>
        );
      }
      return cards;
    } else {
      return filter.out.hero(trello.projects.cards).map((card,index) => {
        const link = filter.in.more(card.attachments);

        if (index < total) {
          return (
            <Card className={`trello-card-desktop ${hasDate}`} key={card.id}>
              { date && printDate(card.due) }
              <div className="wrap trello-card-desktop-inner">
                <Link className="link trello-card-desktop" to={link.url}>
                  { parse(limitLength(card.name,40)) }
                </Link>
                { card.labels && print.labels(card, date) }
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

const mapStateToProps = state => state;

export default connect(mapStateToProps)(DesktopCards);
