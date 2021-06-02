import React from "react";
import { Helmet } from 'react-helmet';
import { print } from "modules/_helpers";

export default function LoadRoute() {
  return (
    <div className="component load-route">
      <Helmet>
        <title>{ print.seo("Loading route") }</title>
      </Helmet>
      <div className="container feed-content">
        <div className="wrap feed-content">
          { print.placeholders(5) }
        </div>
      </div>
    </div>
  );
};
