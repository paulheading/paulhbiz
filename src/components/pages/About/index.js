import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { TrelloPage } from "components/Trello";
import { object } from "modules/helpers";

function AboutPage() {
  const store = {
    trello: useSelector(state => state.trello),
    manifest: useSelector(state => state.manifest)
  }

  // Get SEO information from store
  const manifest = object.ready(store.manifest) && store.manifest.pages.about;
  const resumeLink = object.ready(store.trello) ? <p>My online resume is <Link to="/resume">available here</Link>.</p> : <p className="placeholder">.</p>;

  return (
    <div className="component about-content">
      <Helmet>
        <title>{manifest.title}</title>
        <meta name="description" content={manifest.description} />
      </Helmet>
      <div className="container feed-content">
        <div className="wrap feed-content">
          <TrelloPage name="About" />
          { resumeLink }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(AboutPage);
