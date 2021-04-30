import React from "react";
import { connect, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { object } from "modules/helpers";
import { ResumeCards } from "components/Trello";

function ProjectsRow({ title }) {
  const trello = useSelector(state => state.trelloData);

  const trelloCards = title => {
    if (object.ready(trello)) {
      if (title === "Education") {
        return trello.education.cards;
      } else if (title === "Roles") {
        return trello.roles.cards;
      } else {
        return trello.projects.cards;
      }      
    } else {
      return {};
    }
  }

  return (
    <Container className="page-row">
      <Row>
        <Col sm={12}>
          <h2 className="title resume-row">{title}</h2>
        </Col>
        <ResumeCards source={trelloCards(title)} title={title} />
      </Row>
    </Container>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProjectsRow);
