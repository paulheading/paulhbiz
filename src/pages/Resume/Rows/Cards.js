import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ResumeCards } from "components/Trello";

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
