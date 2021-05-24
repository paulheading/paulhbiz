import React from "react";
import { Helmet } from 'react-helmet';
import moment from "moment";
import { remove, seo, filter } from "modules/helpers";
import parse from "html-react-parser";
import { Badge } from "react-bootstrap";

export default function HappyRoute({ card }) {
  const live = filter.in.live(card.attachments);
  const code = filter.in.code(card.attachments);
  const title = remove.hero(card.name);
  const start = moment(card.start);
  const due = card.due ? moment(card.due) : moment();
  let span = moment(due).diff(start, "months");
  span = span > 1 ? `${span} Months` : `${span} Month`; 

  function dateSummary() {
    const invalid = "Invalid date";
    const project = {
      due: () => card.dueComplete ? <Badge className="project-due split"><span>Finished</span><span>{due.format("MMM YYYY")}</span></Badge> : <Badge className="project-due bg-dark">In progress</Badge>,
      span: () => <Badge className="project-span split"><span>Lasted</span><span>{span}</span></Badge>
    };

    if (due !== invalid && start !== invalid) {
      return (
        <div className="summary feed-content">
          {project.due()}
          {project.span()}
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
};
