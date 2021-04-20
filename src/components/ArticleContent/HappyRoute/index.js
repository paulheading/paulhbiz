import React from "react";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet';
import moment from "moment";
import { parse, remove, seo, filter } from "modules/helpers";

function ArticleContent({ card }) {
  const live = filter.in.live(card.attachments);
  const code = filter.in.code(card.attachments);
  const title = remove.hero(card.name);
  const start = moment(card.start);
  const due = moment(card.due);
  const span = moment(due).diff(start, "months");

  function dateSummary() {
    const invalid = "Invalid date";
    const printDue = () => card.dueComplete ? <div>Finished: {due.format("MMM YYYY")}</div> : <div>In progress</div>;
    const printSpan = () => span > 1 ? `${span} Months` : `${span} Month`;

    if (due !== invalid && start !== invalid) {
      return (
        <div className="summary feed-content">
          {printDue()}
          <div>Lasted: {printSpan()}</div>
        </div>
      );
    }
  }
  
  return (
    <div className="component-about-content">
      <Helmet>
        <title>{ seo.title(title) }</title>
        <meta name="description" content={ card.desc } />
      </Helmet>
      <div className="container feed-content">
        <div className="wrap feed-content">
          <h1>{ title }</h1>
          {dateSummary()}
          <div className="summary feed-content">
            { live && <a href={live.url}>See project</a> }
            { code && <a href={code.url}>See code</a> }
          </div>
          { card.desc && parse(card.desc) }          
         </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ArticleContent);
