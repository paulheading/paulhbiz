import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Head from "components/Head";

import NameRow from "./Rows/Name";
import BiographyRow from "./Rows/Biography";
import ProjectsRow from "./Rows/Projects";
import SkillsRow from "./Rows/Skills";

import { getGithubData, seo } from "modules";
import { github } from "store/actions";

export default function ResumePage() {
  const write = useDispatch();

  useEffect(() => (async () => {
    const data = { github: await getGithubData() };
    if (data.github) { write(github(data.github)); }    
  })(), [write]);

  return (
    <div className="component resume-content">
      <Head { ...seo.resume } />
      <div className="container page-content">
        <div className="wrap page-content">
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
