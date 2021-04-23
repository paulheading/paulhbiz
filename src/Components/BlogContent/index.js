import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { TrelloPage } from "components/Trello";
import getMediumData from "modules/medium";
import { objectReady } from "modules/helpers";
import { mediumData } from "actions";

function BlogContent({mediumData}) {
  const store = {
    manifest: useSelector(state => state.manifestData)
  }
  
  // Get SEO information from store
  const manifest = objectReady(store.manifest) && store.manifest.pages.blog;

  useEffect(() => {
    (async () => mediumData(await getMediumData()))();
  }, [mediumData]);

  return (
    <div className="component about-content">
      <Helmet>
        <title>{manifest.title}</title>
        <meta name="description" content={manifest.description} />
      </Helmet>
      <div className="container feed-content">
        <div className="wrap feed-content">
          <TrelloPage name="Blog" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{mediumData})(BlogContent);
