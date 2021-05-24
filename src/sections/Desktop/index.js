import React, { useState, useEffect, useRef } from "react";
import { connect, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import makeDraggable from "modules/animations/desktop";
import { FolderButton } from "components/Buttons";
import DownloadStats from "components/DownloadStats";
import SpotifyFeed from "components/SpotifyFeed";
import { TrelloFeed } from "components/Trello";
import { PauseSvg, PlaySvg } from "icons";
import { CreditSection } from "sections";

import getNPMData from "modules/npm";
import getGemData from "modules/gem";
import getSpotifyData from "modules/spotify";
import getTrelloData from "modules/trello";
import { npm, gem, spotify, trello, pause } from "actions";
import { object } from "modules/helpers";

function DesktopSection({ npm, gem, spotify, trello, pause }) {
  useEffect(() => {
    (async () => {
      npm(await getNPMData());
      gem(await getGemData());
      spotify(await getSpotifyData());
      trello(await getTrelloData());
    })();
    makeDraggable(desktop.current);
  }, [npm, gem, spotify, trello]);

  const store = {
    pause: useSelector(state => state.pause),
    gem: useSelector(state => state.gem),
    npm: useSelector(state => state.npm),
  };

  const futuro = object.ready(store.gem) ? { downloads: store.gem.downloads } : { downloads: "20000" };
  const reset = object.ready(store.npm) ? { downloads: store.npm.collected.npm.downloads[5].count } : { downloads: "1000" };

  const [spotifyFolder, setSpotifyFolder] = useState(true);
  const [trelloFolder, setTrelloFolder] = useState(true);
  const desktop = useRef(null);

  return (
    <div className="component desktop-area">
      <div className="container desktop-area">
        <div className="wrap desktop-area">
          
          <div ref={desktop} className="container desktop-windows">
            <SpotifyFeed />
            <TrelloFeed context="desktop" />
          </div>
          
          <div className="container desktop-folders">

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

            <DownloadStats
              type="rubygem" 
              name="futuro" 
              downloads={futuro.downloads} />
            <DownloadStats 
              type="npm"
              name="barbican-reset" 
              downloads={reset.downloads} />

            <Button className="pause-play" variant="link" onClick={() => pause(!store.pause)}>{ store.pause ? <PlaySvg /> : <PauseSvg /> }</Button>

          </div>
        </div>

        <CreditSection />

      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{ npm, gem, spotify, trello, pause })(DesktopSection);
