import React from "react";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet';
import { seo } from "modules/helpers";
import LoadingAnimation from "components/LoadingAnimation";

function LoadRoute() {
  return (
    <div className="component load-route">
      <Helmet>
        <title>{ seo.title("Loading route") }</title>
      </Helmet>
      <div className="container feed-content">
        <div className="wrap feed-content">
          <LoadingAnimation />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(LoadRoute);
