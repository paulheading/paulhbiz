import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect, useSelector } from "react-redux";
import { printResume } from "../../modules/trello/print";

function ResumeContent() {
  const store = {
    treehouseData: useSelector((state) => state.treehouseData),
    trelloData: useSelector((state) => state.trelloData),
  };
  return (
    <div className="component-resume-content">
      <div className="page-content__container">
        <div className="page-content__wrap">
          {/* component */}
          <Container className="page-row">
            <Row>
              <Col sm={8}>
                <h1 className="page-row__title">Paul Heading</h1>
              </Col>
              <Col sm={4}>
                <div className="page-row__address">Hackney, London</div>
                <a
                  className="link__email"
                  href="mailto:hello@paulh.biz?subject=Hello!"
                >
                  hello@paulh.biz
                </a>
              </Col>
            </Row>
          </Container>
          {/* component */}
          <Container className="page-row">
            <Row>
              <Col sm={8}>
                <h2 className="column__title">Biography</h2>
                <div className="column__copy">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent ut ultrices ante.
                </div>
              </Col>
              <Col sm={4}>
                <a
                  className="link__social"
                  href="https://github.com/paulheading"
                >
                  Github
                </a>
                <a
                  className="link__social"
                  href="https://paulheading.medium.com/"
                >
                  Medium
                </a>
                <a
                  className="link__social"
                  href="https://teamtreehouse.com/paulheading"
                >
                  Treehouse
                </a>
              </Col>
            </Row>
          </Container>
          {/* component */}
          {printResume.projects(store.trelloData)}
          {/* component */}
          {printResume.roles(store.trelloData)}
          {/* component */}
          {printResume.skills(store.treehouseData)}
          {/* component */}
          {printResume.education(store.trelloData)}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ResumeContent);
