import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from 'react-helmet';

export default function NotFound() {
  const store = { seo: useSelector(state => state.seo) };  
  const seo = store.seo.not_found;

  return (
    <div className="component not-found">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
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
