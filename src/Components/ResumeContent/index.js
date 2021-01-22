import React from "react";
import { connect } from "react-redux";
import { NameRow, BiographyRow, ProjectsRow, SkillsRow } from "./Rows";

function ResumeContent() {
  return (
    <div className="component-resume-content">
      <div className="page-content__container">
        <div className="page-content__wrap">
          <NameRow />
          <BiographyRow />
          <ProjectsRow title="Projects" />
          <ProjectsRow title="Roles" />
          <SkillsRow title="Skills" />
          <ProjectsRow title="Education" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ResumeContent);
