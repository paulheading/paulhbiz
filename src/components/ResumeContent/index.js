import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import NameRow from "./Rows/Name";
import BiographyRow from "./Rows/Biography";
import ProjectsRow from "./Rows/Projects";
import SkillsRow from "./Rows/Skills";
import getGithubData from "modules/github";
import { github } from "actions";
import { object } from "modules/helpers";

function ResumeContent({ github }) {
  const store = {
    manifest: useSelector(state => state.manifest)
  };
  
  // Get SEO information from store
  const manifest = object.ready(store.manifest) && store.manifest.pages.resume;
  
  useEffect(() => {
    (async () => github(await getGithubData()))();
  }, [github]);

  return (
    <div className="component resume-content">
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

export default connect(mapStateToProps,{ github })(ResumeContent);
