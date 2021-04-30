import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { object } from "modules/helpers";
import Badge from "react-bootstrap/Badge";
import getTreehouseData from "modules/treehouse";
import { treehouseData } from "actions";
import temp from "modules/placeholder";

function SkillsRow({ treehouseData }) {
  const treehouse = useSelector(state => state.treehouseData);
  const ready = object.ready(treehouse);
  const feed = ready ? treehouse : temp.treehouse;

  const printSkills = () => {
    let points = feed.points;
    let list = Object.keys(points);
  
    list = list.sort((a,b) => {
      if (points[a] > points[b]) return -1;
      if (points[a] < points[b]) return 1;
      return 0;
    });
  
    return list.map((topic,index) => {
      const value = points[topic];
      const placeholder = ready ? "purple" : "placeholder";
  
      if (topic !== "total") {
        return value >= 100 && <Badge className={placeholder} key={`topic-${index}`}>{topic} {value}</Badge>;
      }
      return null;
    });
  }

  useEffect(() => (async () => treehouseData(await getTreehouseData()))(), [treehouseData]);

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
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{ treehouseData })(SkillsRow);
