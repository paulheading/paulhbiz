import React from "react";
import { connect, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { objectReady, remove } from "modules/helpers";

function ArticleContent({ card }) {
  const store = {
    manifest: useSelector(state => state.manifestData),
    trello: useSelector(state => state.trelloData)
  };

  // Get SEO information from store
  const manifest = objectReady(store.manifest) && store.manifest.pages.blog;

  return (
    <div className="component-about-content">
      <Helmet>
        <title>{manifest.title}</title>
        <meta name="description" content={manifest.description} />
      </Helmet>
      <div className="container feed-content">
        <div className="wrap feed-content">
          { remove.hero(card.name) }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ArticleContent);
