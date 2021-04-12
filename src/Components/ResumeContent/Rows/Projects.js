import React from "react";
import { connect, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { objectReady } from "modules/helpers";
import { ResumeCards } from "components/Trello";

function ProjectsRow({ title }) {
  const feed = useSelector(state => state.trelloData);
  const ready = objectReady(feed);
  const placeholder = ready ? "" : "placeholder";

  return (
    <Container className="page-row">
      <Row>
        <Col sm={12}>
          <h2 className={`title resume-row ${ placeholder }`}>{title}</h2>
        </Col>
        <ResumeCards source={title} />
      </Row>
    </Container>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProjectsRow);
