import moment from "moment";
import { Badge } from "react-bootstrap";

export default function Status({ start, due, dueComplete }) {
  start = moment(start);
  due = due ? moment(due) : moment();
  let span = moment(due).diff(start, "months");
  span = span > 1 ? `${span} Months` : `${span} Month`;
  
  const invalid = "Invalid date";
  const project = {
    due: () => dueComplete ? <Badge className="project-due split"><span>Finished</span><span>{due.format("MMM YYYY")}</span></Badge> : <Badge className="project-due bg-dark">In progress</Badge>,
    span: () => <Badge className="project-span split"><span>Lasted</span><span>{span}</span></Badge>
  };

  project.due.displayName = 'ProjectDue';
  project.span.displayName = 'ProjectSpan';

  if (due !== invalid && start !== invalid) {
    return (
      <div className="component status">
        {project.due()}
        {project.span()}
      </div>
    );
  } 
  
  return null;
}


