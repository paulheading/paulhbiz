import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { TrelloPage, DesktopCards } from "components/Trello";
import { objectReady } from "modules/helpers";

function AboutContent() {
  const store = {
    trello: useSelector(state => state.trelloData),
    manifest: useSelector(state => state.manifestData)
  }

  // Get SEO information from store
  const manifest = objectReady(store.manifest) && store.manifest.pages.about;
  const resumeLink = objectReady(store.trello) ? <p>My online resume is <Link to="/resume">available here</Link>.</p> : <p className="placeholder">.</p>;

  return (
    <div className="component-about-content">
      <Helmet>
        <title>{manifest.title}</title>
        <meta name="description" content={manifest.description} />
      </Helmet>
      <div className="container feed-content">
        <div className="wrap feed-content">
          <TrelloPage name="About" />
          { resumeLink }
          <div className="container trello-feed">
            <div className="wrap trello-feed">
              <DesktopCards date />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(AboutContent);
