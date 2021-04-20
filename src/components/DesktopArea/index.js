import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeDraggable } from "modules/animations";
import { FolderButton } from "components/Buttons/Folder";
import CreditLine from "components/CreditLine";
import DesktopTopbar from "./Topbar";
import SpotifyFeed from "./SpotifyFeed";
import { TrelloFeed } from "components/Trello";

import getRubyGemsData from "modules/rubygems";
import getManifestData from "modules/manifest";
import getSpotifyData from "modules/spotify";
import getTrelloData from "modules/trello";
import { rubyGemsData, manifestData, spotifyData, trelloData } from "actions";

function DesktopArea({ rubyGemsData, manifestData, spotifyData, trelloData }) {
  useEffect(() => {
    (async () => {
      rubyGemsData(await getRubyGemsData());
      manifestData(await getManifestData());
      spotifyData(await getSpotifyData());
      trelloData(await getTrelloData());
    })();
    makeDraggable();
  }, [rubyGemsData, manifestData, spotifyData, trelloData]);

  const [spotifyFolder, setSpotifyFolder] = useState(true);
  const [trelloFolder, setTrelloFolder] = useState(true);

  return (
    <div className="component desktop-area">
      <DesktopTopbar />
      <div className="container desktop-area">
        <div className="wrap desktop-area">
          <div className="windows desktop-area">
            <SpotifyFeed />
            <TrelloFeed />
          </div>
          <div className="folders desktop-area">
            <FolderButton
              title="Spotify"
              input={spotifyFolder}
              output={setSpotifyFolder}
            />
            <FolderButton
              title="Trello"
              input={trelloFolder}
              output={setTrelloFolder}
            />
          </div>
        </div>
        <CreditLine />
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{ rubyGemsData, manifestData, spotifyData, trelloData })(DesktopArea);
