import React, { useState, useEffect, useRef } from "react";
import { connect, useSelector } from "react-redux";
import makeDraggable from "modules/animations/desktop";
import { FolderButton } from "components/Buttons";
import DownloadDetails from "components/DownloadDetails";
import CreditLine from "components/CreditLine";
import SpotifyFeed from "components/SpotifyFeed";
import { TrelloFeed } from "components/Trello";

import getNPMData from "modules/npm";
import getGemData from "modules/gem";
import getManifestData from "modules/manifest";
import getSpotifyData from "modules/spotify";
import getTrelloData from "modules/trello";
import { npm, gem, manifest, spotify, trello } from "actions";
import { object } from "modules/helpers";

function DesktopArea({ npm, gem, manifest, spotify, trello }) {
  useEffect(() => {
    (async () => {
      npm(await getNPMData());
      gem(await getGemData());
      manifest(await getManifestData());
      spotify(await getSpotifyData());
      trello(await getTrelloData());
    })();
    makeDraggable(desktop.current);
  }, [npm, gem, manifest, spotify, trello]);

  const store = {
    gem: useSelector(state => state.gem),
    npm: useSelector(state => state.npm),
  };

  const futuro = object.ready(store.gem) ? { downloads: store.gem.downloads } : { downloads: "20000" };
  const reset = object.ready(store.npm) ? { downloads: store.npm.collected.npm.downloads[5].count } : { downloads: "1000" };

  const [spotifyFolder, setSpotifyFolder] = useState(true);
  const [trelloFolder, setTrelloFolder] = useState(true);
  const desktop = useRef(null);

  return (
    <div ref={desktop} className="component desktop-area">
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
              downloads={futuro.downloads} />
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

export default connect(mapStateToProps,{ npm, gem, manifest, spotify, trello })(DesktopArea);
