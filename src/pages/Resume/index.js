import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import NameRow from "./Rows/Name";
import BiographyRow from "./Rows/Biography";
import ProjectsRow from "./Rows/Projects";
import SkillsRow from "./Rows/Skills";
// import getGithubData from "modules/github";

export default function ResumePage() {
  const store = { seo: useSelector(state => state.seo) };
  // const github = useDispatch();
  const seo = store.seo.resume;
  
  // https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware
  // useEffect(() => (async () => github(await getGithubData()))(), [github]);

  return (
    <div className="component resume-content">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
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
