import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ResumeCards } from "components";

export default function CardsRow(props) {
  return (
    <Container className="page-row">
      <Row className="page-row --cards">
        <Col className="full-width">
          <h2 className="title resume-row">{props.title}</h2>
        </Col>
        <ResumeCards { ...props } />
      </Row>
    </Container>
  );
};
