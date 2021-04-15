import React from "react";
import { connect, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { TrelloPage, DesktopCards } from "components/Trello";
import { objectReady } from "modules/helpers";

function AboutContent() {
  let manifest = useSelector(state => state.manifestData);
  const ready = objectReady(manifest);
  manifest = ready ? manifest.pages.about : manifest;

  return (
    <div className="component-about-content">
      <Helmet>
        <title>{manifest.title}</title>
        <meta name="description" content={manifest.description} />
      </Helmet>
      <div className="container feed-content">
        <div className="wrap feed-content">          
          <TrelloPage name="About" />
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
