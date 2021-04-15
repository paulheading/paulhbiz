import React from "react";
import { connect, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { objectReady } from "modules/helpers";

function NotFound() {
  let manifest = useSelector(state => state.manifestData);
  const ready = objectReady(manifest);
  manifest = ready ? manifest.pages.notfound : manifest;

  return (
    <div className="component-not-found">
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
