import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { makeDraggable } from "modules/animations";
import { FolderButton } from "components/Buttons/Folder";
import CreditLine from "components/CreditLine";
import DesktopTopbar from "./Topbar";
import SpotifyFeed from "./SpotifyFeed";
import { TrelloFeed } from "components/Trello";
import { RubyGemSvg } from "components/SvgIcons";

import getRubyGemsData from "modules/rubygems";
import getManifestData from "modules/manifest";
import getSpotifyData from "modules/spotify";
import getTrelloData from "modules/trello";
import { rubyGemsData, manifestData, spotifyData, trelloData } from "actions";
import { objectReady } from "modules/helpers";

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

  const store = {
    rubyGems: useSelector(state => state.rubyGemsData),
  };

  const gem = {
    name: objectReady(store.rubyGems) ? store.rubyGems.name : "futuro",
    downloads: objectReady(store.rubyGems) ? store.rubyGems.downloads : "20000"
  };

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
            <div className="container ruby-gem-details">
              <div className="col ruby-gem-details">
                <RubyGemSvg />
              </div>
              <div className="col ruby-gem-details">
                <div>{gem.name}</div>
                <div>{gem.downloads}</div>              
              </div>
            </div>
          </div>
        </div>
        <CreditLine />
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{ rubyGemsData, manifestData, spotifyData, trelloData })(DesktopArea);
