import React from "react";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet';
import moment from "moment";
import { parse, remove, seo, filter } from "modules/helpers";

function ArticleContent({ card }) {
  const live = filter.in.live(card.attachments);
  const code = filter.in.code(card.attachments);
  const title = remove.hero(card.name);

  const due  = moment(card.due).format("MMM YYYY");
  const start = moment(card.start).format("MMM YYYY");

  function dateSpan(due, start) {
    const months = moment(due).diff(start, "months");
    return months > 1 ? `${months} Months` : `${months} Month`;
  }

  function dateSummary() {
    const invalid = "Invalid date";
    const printFinish = () => card.dueComplete ? <div>Finished: {due}</div> : <div>In progress</div>;

    if (due !== invalid && start !== invalid) {
      return (
        <div className="summary feed-content">
          {printFinish()}
          <div>Lasted: {dateSpan(due,start)}</div>
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
          { parse(card.desc) }          
         </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ArticleContent);
