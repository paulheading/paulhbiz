import React from "react";
import Head from "components/Head";
import moment from "moment";
import { remove, print, filter } from "modules/helpers";
import parse from "html-react-parser";
import { Badge } from "react-bootstrap";

export default function HappyRoute(data) {
  const live = filter.in.live(data.attachments);
  const code = filter.in.code(data.attachments);
  const title = remove.hero(data.name);
  const start = moment(data.start);
  const due = data.due ? moment(data.due) : moment();
  let span = moment(due).diff(start, "months");
  span = span > 1 ? `${span} Months` : `${span} Month`; 

  function DateSummary() {
    const invalid = "Invalid date";
    const project = {
      due: () => data.dueComplete ? <Badge className="project-due split"><span>Finished</span><span>{due.format("MMM YYYY")}</span></Badge> : <Badge className="project-due bg-dark">In progress</Badge>,
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
      <Head title={ print.seo(title) } description={ data.desc } />
      <div className="container feed-content">
        <div className="wrap feed-content">
          <h1>{ title }</h1>
          <DateSummary />
          <p className="summary feed-content">
            { live && <a href={live.url}>See project</a> }
            { code && <a href={code.url}>See code</a> }
          </p>
          { data.desc && parse(data.desc) }          
         </div>
      </div>
    </div>
  );
};
