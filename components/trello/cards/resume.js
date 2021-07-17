import { useSelector } from "react-redux";
import { filter, print } from "scripts/helpers";
import { Col } from "react-bootstrap";

export default function ResumeCards({ title }) {
  const trello = useSelector(({ trello }) => trello);
  let content = trello.ready ? filter.trello(trello, title) : filter.out.hero(trello.projects.cards); 
  content = content.filter((_, index) => index < 3);

  return content.map((card, index) => {
    const placeholder = card.placeholder ? "placeholder" : "";
    return (
      <Col className="resume-card" key={`resume-card-${index}`}>
        {card.labels && print.labels(card.labels)}
        <div className="wrap resume-card-title">
          {print.resume.name(card)}
          {print.resume.dates(card)}
        </div>
        <div className={`copy resume-card ${placeholder}`}>
          {filter.string(card.desc)}
        </div>
      </Col>
    );
  });
};
