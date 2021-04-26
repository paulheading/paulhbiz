import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { makeDraggable } from "modules/animations";
import { FolderButton } from "components/Buttons";
import DownloadDetails from "components/DownloadDetails";
import CreditLine from "components/CreditLine";
import SpotifyFeed from "./SpotifyFeed";
import { TrelloFeed } from "components/Trello";

import getNPMData from "modules/npm";
import getGemData from "modules/gem";
import getManifestData from "modules/manifest";
import getSpotifyData from "modules/spotify";
import getTrelloData from "modules/trello";
import { npmData, gemData, manifestData, spotifyData, trelloData } from "actions";
import { objectReady } from "modules/helpers";

function DesktopArea({ npmData, gemData, manifestData, spotifyData, trelloData }) {
  useEffect(() => {
    (async () => {
      npmData(await getNPMData());
      gemData(await getGemData());
      manifestData(await getManifestData());
      spotifyData(await getSpotifyData());
      trelloData(await getTrelloData());
    })();
    makeDraggable();
  }, [npmData, gemData, manifestData, spotifyData, trelloData]);

  const store = {
    gem: useSelector(state => state.gemData),
    npm: useSelector(state => state.npmData),
  };

  const gem = objectReady(store.gem) ? { downloads: store.gem.downloads } : { downloads: "20000" };
  const reset = objectReady(store.npm) ? { downloads: store.npm.collected.npm.downloads[5].count } : { downloads: "1000" };

  const [spotifyFolder, setSpotifyFolder] = useState(true);
  const [trelloFolder, setTrelloFolder] = useState(true);

  return (
    <div className="component desktop-area">
      <div className="container desktop-area">

        <div className="wrap desktop-area">

          <SpotifyFeed />
          <TrelloFeed context="desktop" />

          <div className="wrap desktop-right">

            <div className="wrap desktop-folders">
              <FolderButton
                title="Spotify"
                input={spotifyFolder}
                output={setSpotifyFolder} />
              <FolderButton
                title="Trello"
                input={trelloFolder}
                output={setTrelloFolder} />
            </div>

            <DownloadDetails
              type="rubygem" 
              name="futuro" 
              downloads={gem.downloads} />
            <DownloadDetails 
              type="npm"
              name="barbican-reset" 
              downloads={reset.downloads} />

          </div>

        </div>

        <CreditLine />

      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{ npmData, gemData, manifestData, spotifyData, trelloData })(DesktopArea);
