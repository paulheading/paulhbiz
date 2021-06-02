import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";

import { FolderButton } from "components/Buttons";
import DownloadStats from "components/DownloadStats";
import SpotifyFeed from "components/SpotifyFeed";
import { TrelloFeed } from "components/Trello";

import { PauseSvg, PlaySvg } from "icons";
import { CreditBlock } from "blocks";

import makeDraggable from "animations/desktop";
import { getNpmData, getGemData, getSpotifyData, getTrelloData } from "modules";
import { npm, gem, spotify, trello, pause } from "store/actions";

export default function DesktopBlock() {
  const store = {
    pause: useSelector(state => state.pause),
    gem: useSelector(state => state.gem),
    npm: useSelector(state => state.npm),
  };
  const write = useDispatch();

  useEffect(() => {
    (async () => {
      const data = {
        npm: await getNpmData(),
        gem: await getGemData(),
        spotify: await getSpotifyData(),
        trello: await getTrelloData(),
      }
      if (data.npm) { write(npm(data.npm.collected.npm.downloads[5].count)); }
      if (data.gem) { write(gem(data.gem.downloads)); }
      // if (data.spotify) { write(spotify(data.spotify)); }
      if (data.trello) { write(trello(data.trello)); }
    })();
    makeDraggable(desktop.current);
  }, [write]);

  const [spotifyFolder, setSpotifyFolder] = useState(true);
  const [trelloFolder, setTrelloFolder] = useState(true);
  const desktop = useRef(null);

  return (
    <div className="component desktop-block">
      <div className="container desktop-block">
        <div className="wrap desktop-block">
          
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
              downloads={store.gem.downloads} />
            <DownloadStats 
              type="npm"
              name="barbican-reset" 
              downloads={store.npm.downloads} />

            <Button className="pause-play" variant="link" onClick={() => pause(!store.pause)}>{ store.pause ? <PlaySvg /> : <PauseSvg /> }</Button>

          </div>
        </div>

        <CreditBlock />

      </div>
    </div>
  );
};
