import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from 'react-helmet';
import { TrelloPage } from "components/Trello";
import getMediumData from "modules/medium";
import { medium } from "actions";

export default function BlogPage() {
  const store = { seo: useSelector(state => state.seo) };
  const write = useDispatch();
  const seo = store.seo.blog;

  useEffect(() => (async () => write(medium(await getMediumData())))(), [write]);

  return (
    <div className="component about-content">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>
      <div className="container feed-content">
        <div className="wrap feed-content">
          <TrelloPage name="Blog" />
        </div>
      </div>
    </div>
  );
};
