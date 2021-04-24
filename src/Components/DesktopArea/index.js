import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { makeDraggable } from "modules/animations";
import { FolderButton } from "components/Buttons/Folder";
import CreditLine from "components/CreditLine";
import SpotifyFeed from "./SpotifyFeed";
import { TrelloFeed } from "components/Trello";
import { RubyGemSvg } from "components/SvgIcons";

import getRubyGemsData from "modules/rubygems";
import getManifestData from "modules/manifest";
import getSpotifyData from "modules/spotify";
import getTrelloData from "modules/trello";
import { npmData, rubyGemsData, manifestData, spotifyData, trelloData } from "actions";
import { objectReady } from "modules/helpers";
// import moment from "moment";

// const npm = require('api-npm');
// const now = moment().format();

function DesktopArea({ npmData, rubyGemsData, manifestData, spotifyData, trelloData }) {
  useEffect(() => {
    (async () => {
      rubyGemsData(await getRubyGemsData());
      manifestData(await getManifestData());
      spotifyData(await getSpotifyData());
      trelloData(await getTrelloData());
    })();
    makeDraggable();
  }, [rubyGemsData, manifestData, spotifyData, trelloData]);

  // npm.getstat('barbican-reset','2021-04-06', now, test);

  // function test(data){
  //   return npmData(data);
  // }

  const store = {
    rubyGems: useSelector(state => state.rubyGemsData),
    npm: useSelector(state => state.npmData),
  };

  const gem = objectReady(store.rubyGems) ? { downloads: store.rubyGems.downloads } : { downloads: "20000" };
  const reset = objectReady(store.npm) ? { downloads: store.npm.downloads } : { downloads: "1000" };

  const [spotifyFolder, setSpotifyFolder] = useState(true);
  const [trelloFolder, setTrelloFolder] = useState(true);

  return (
    <div className="component desktop-area">
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
                <div>futuro</div>
                <div>{gem.downloads}</div>              
              </div>
            </div>
            <div className="container ruby-gem-details">
              <div className="col ruby-gem-details">
                <RubyGemSvg />
              </div>
              <div className="col ruby-gem-details">
                <div>barbican-reset</div>
                <div>{reset.downloads}</div>              
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

export default connect(mapStateToProps,{ npmData, rubyGemsData, manifestData, spotifyData, trelloData })(DesktopArea);
