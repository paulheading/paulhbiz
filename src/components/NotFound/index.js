import React from "react";
import { connect, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { objectReady } from "modules/helpers";

function NotFound() {
  const store = {
    manifest: useSelector(state => state.manifestData)
  };
  
  // Get SEO information from store
  const manifest = objectReady(store.manifest) && store.manifest.pages.notfound;

  return (
    <div className="component not-found">
      <Helmet>
        <title>{manifest.title}</title>
        <meta name="description" content={manifest.description} />
      </Helmet>
      <div className="container feed-content">
        <div className="wrap feed-content">
          <h1 className="feed-content__title">Page Not Found 🤬</h1>
          <h5 className="feed-content__subtitle">uh oh! where da page gone?</h5>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(NotFound);
