import React from "react";
import { connect, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { object } from "modules/helpers";

function NotFound() {
  const store = {
    manifest: useSelector(state => state.manifest)
  };
  
  // Get SEO information from store
  const manifest = object.ready(store.manifest) && store.manifest.pages.notfound;

  return (
    <div className="component not-found">
      <Helmet>
        <title>{manifest.title}</title>
        <meta name="description" content={manifest.description} />
      </Helmet>
      <div className="container feed-content">
        <div className="wrap feed-content">
          <h1 className="title feed-content">Page Not Found 🤬</h1>
          <h4 className="subtitle feed-content">uh oh! where da page gone?</h4>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(NotFound);
