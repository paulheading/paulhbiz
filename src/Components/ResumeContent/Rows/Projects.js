import React from "react";
import { connect, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { projectData, printProjects } from "modules/helpers/resume";

function ProjectsRow(props) {
  const feed = useSelector((state) => state.trelloData);
  const data = projectData(feed, props);

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
        {printProjects(data)}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ProjectsRow);
