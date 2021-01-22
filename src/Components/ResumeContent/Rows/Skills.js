import React from "react";
import { connect, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { skillsData, printSkills } from "../../../modules/helpers/resume";

function SkillsRow(props) {
  const feed = useSelector((state) => state.treehouseData);
  const data = skillsData(feed, props);

  return (
    <Container className="page-row">
      <Row>
        <Col sm={12}>
          <h2
            className={`column__title ${
              data.placeholder ? "placeholder" : "live"
            }`}
          >
            {data.title}
          </h2>
        </Col>
        <Col className="skills" sm={12}>
          {printSkills(data.skills, data.placeholder)}
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(SkillsRow);
