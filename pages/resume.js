import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Head } from 'layouts'

import { NameRow, BiographyRow, CardsRow, SkillsRow } from 'components'
import seo from "scripts/seo";
import get from "scripts/getters";
import { github } from 'store/actions'

export default function ResumePage() {
  const store = { medium: useSelector(({ medium }) => medium) };
  const write = useDispatch();

  console.log("medium: ", store.medium);

  useEffect(() => (async () => {
    const data = { github: await get.Github() };
    if (data.github) { write(github(data.github)); }    
  })(), [write]);

  return (
    <div className="component resume-content">
      <Head { ...seo.resume } />
      <div className="container page-content">
        <div className="wrap page-content">
          <NameRow />
          <BiographyRow />
          <CardsRow title="Projects" />
          <CardsRow title="Roles" />
          <SkillsRow title="Skills" />
          <CardsRow title="Education" />
        </div>
      </div>
    </div>
  );
}
