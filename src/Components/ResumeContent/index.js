import React, { useEffect } from "react";
import { connect } from "react-redux";
import NameRow from "./Rows/Name";
import BiographyRow from "./Rows/Biography";
import ProjectsRow from "./Rows/Projects";
import SkillsRow from "./Rows/Skills";
import getGithubData from "modules/github";
import { githubData } from "actions";

function ResumeContent({ githubData }) {
  useEffect(() => {
    (async () => githubData(await getGithubData()))();
  }, [githubData]);

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

const mapStateToProps = state => state;

export default connect(mapStateToProps,{ githubData })(ResumeContent);
