import React from "react";
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
        {/* component */}
        <div className="page-content__wrap">
          <div className="page-content__row">
            <div className="page-content__column double">
              <h1>Paul Heading</h1>
            </div>
            <div className="page-content__column">
              <div className="page-content__address">Hackney, London</div>
              <a
                className="link__email"
                href="mailto:hello@paulh.biz?subject=Hello!"
              >
                hello@paulh.biz
              </a>
            </div>
          </div>
        </div>
        {/* component */}
        <div className="page-content__wrap">
          <div className="page-content__row">
            <div className="page-content__column double">
              <h2 className="column__title">Biography</h2>
              <div className="column__copy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ut ultrices ante.
              </div>
            </div>
            <div className="page-content__column">
              <a className="link__social" href="https://github.com/paulheading">
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
            </div>
          </div>
        </div>
        {/* component */}
        <div className="page-content__wrap">
          {printResume.projects(store.trelloData)}
        </div>
        {/* component */}
        <div className="page-content__wrap">
          {printResume.roles(store.trelloData)}
        </div>
        {/* component */}
        <div className="page-content__wrap">
          {printResume.skills(store.treehouseData)}
        </div>
        {/* component */}
        <div className="page-content__wrap">
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
