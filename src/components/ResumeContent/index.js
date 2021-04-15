import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import NameRow from "./Rows/Name";
import BiographyRow from "./Rows/Biography";
import ProjectsRow from "./Rows/Projects";
import SkillsRow from "./Rows/Skills";
import getGithubData from "modules/github";
import { githubData } from "actions";
import { objectReady } from "modules/helpers";

function ResumeContent({ githubData }) {
  let manifest = useSelector(state => state.manifestData);
  const ready = objectReady(manifest);
  manifest = ready ? manifest.pages.resume : manifest;
  
  useEffect(() => {
    (async () => githubData(await getGithubData()))();
  }, [githubData]);

  return (
    <div className="component-resume-content">
      <Helmet>
        <title>{manifest.title}</title>
        <meta name="description" content={manifest.description} />
      </Helmet>
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
