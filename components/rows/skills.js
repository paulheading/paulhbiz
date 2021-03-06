import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Badge } from "react-bootstrap";
import get from "scripts/getters";
import { treehouse } from "store/actions";

export default function SkillsRow() {
  const store = { treehouse: useSelector(({ treehouse }) => treehouse) };
  const write = useDispatch();

  const printSkills = () => {
    let points = store.treehouse.points;
    let list = Object.keys(points);
  
    list = list.sort((a,b) => {
      if (points[a] > points[b]) return -1;
      if (points[a] < points[b]) return 1;
      return 0;
    });
  
    return list.map((topic,index) => {
      const value = points[topic];
      const classes = store.treehouse.ready ? "points purple" : "points placeholder";
  
      if (topic !== "total") {
        return value >= 100 && <Badge className={classes} key={`topic-${index}`}>{topic} {value}</Badge>;
      }
      return null;
    });
  }

  useEffect(() => (async () => write(treehouse(await get.Treehouse())))(), [write]);

  return (
    <Container className="page-row">
      <Row className="page-row --points">
        <Col className="full-width">
          <h2 className="title resume-row">Skills</h2>
        </Col>
        <Col className="skills">
          {printSkills()}
        </Col>
      </Row>
    </Container>
  );
};
