import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { TrelloPage } from "components/Trello";
import getMediumData from "modules/medium";
import { object } from "modules/helpers";
import { medium } from "actions";

function BlogPage({medium}) {
  const store = {
    manifest: useSelector(state => state.manifest)
  }
  
  // Get SEO information from store
  const manifest = object.ready(store.manifest) && store.manifest.pages.blog;

  useEffect(() => {
    (async () => medium(await getMediumData()))();
  }, [medium]);

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

export default connect(mapStateToProps,{medium})(BlogPage);
