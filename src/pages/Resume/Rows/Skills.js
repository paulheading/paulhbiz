import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { getTreehouseData } from "modules";
import { treehouse } from "store/actions";

export default function SkillsRow() {
  const store = { treehouse: useSelector(state => state.treehouse) };
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
      const placeholder = store.treehouse.ready ? "purple" : "placeholder";
  
      if (topic !== "total") {
        return value >= 100 && <Badge className={placeholder} key={`topic-${index}`}>{topic} {value}</Badge>;
      }
      return null;
    });
  }

  useEffect(() => (async () => write(treehouse(await getTreehouseData())))(), [write]);

  return (
    <Container className="page-row">
      <Row>
        <Col sm={12}>
          <h2 className="title resume-row">Skills</h2>
        </Col>
        <Col className="skills" sm={12}>
          {printSkills()}
        </Col>
      </Row>
    </Container>
  );
};
