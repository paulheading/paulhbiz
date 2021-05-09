import React from "react";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet';
import moment from "moment";
import { remove, seo, filter } from "modules/helpers";
import parse from "html-react-parser";
import { Badge } from "react-bootstrap";

function ArticleContent({ card }) {
  const live = filter.in.live(card.attachments);
  const code = filter.in.code(card.attachments);
  const title = remove.hero(card.name);
  const start = moment(card.start);
  const due = card.due ? moment(card.due) : moment();
  const span = moment(due).diff(start, "months");

  function dateSummary() {
    const invalid = "Invalid date";
    const printDue = () => card.dueComplete ? <Badge className="split"><span>Finished</span><span>{due.format("MMM YYYY")}</span></Badge> : <Badge className="bg-dark">In progress</Badge>;

    const printSpan = () => span > 1 ? `${span} Months` : `${span} Month`;

    if (due !== invalid && start !== invalid) {
      return (
        <div className="summary feed-content">
          {printDue()}
          <Badge className="split"><span>Lasted</span><span>{printSpan()}</span></Badge>
        </div>
      );
    }
  }
  
  return (
    <div className="component about-content">
      <Helmet>
        <title>{ seo.title(title) }</title>
        <meta name="description" content={ card.desc } />
      </Helmet>
      <div className="container feed-content">
        <div className="wrap feed-content">
          <h1>{ title }</h1>
          {dateSummary()}
          <p className="summary feed-content">
            { live && <a href={live.url}>See project</a> }
            { code && <a href={code.url}>See code</a> }
          </p>
          { card.desc && parse(card.desc) }          
         </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ArticleContent);
