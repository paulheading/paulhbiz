import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { objectReady } from "../helpers";

function handleSkills(skills) {
  let list = Object.keys(skills);

  list.sort((a, b) => {
    if (skills[a] > skills[b]) return -1;
    if (skills[a] < skills[b]) return 1;
    return 0;
  });

  return list.map((topic, index) => {
    const points = skills[topic];
    if (topic !== "total") {
      if (points > 100) {
        return (
          <Badge
            className="purple"
            key={`skill-${index}`}
          >{`${topic} ${points}`}</Badge>
        );
      }
      return null;
    }
    return null;
  });
}

export function printResumeSkills(skills) {
  if (!objectReady(skills)) {
    return (
      <Container className="page-row">
        <Row>
          <Col sm={12}>
            <h2 className="column__title placeholder">.</h2>
          </Col>
          <Col sm={12}>
            <Badge>.</Badge>
          </Col>
        </Row>
      </Container>
    );
  } else {
    skills = skills.points;
    return (
      <Container className="page-row">
        <Row>
          <Col sm={12}>
            <h2 className="column__title placeholder">Skills</h2>
          </Col>
          <Col className="skills" sm={12}>
            {handleSkills(skills)}
          </Col>
        </Row>
      </Container>
    );
  }
}
