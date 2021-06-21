import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Button from "react-bootstrap/Button";

import { Folder } from "components/Buttons";
import Downloads from "components/Downloads";
import { SpotifyFeed } from "components/Spotify";
import { TrelloFeed } from "components/Trello";

// import { PauseSvg, PlaySvg } from "icons";
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
      if (data.npm) { write(npm(data.npm)); }
      if (data.gem) { write(gem(data.gem)); }
      if (data.spotify) { write(spotify(data.spotify)); }
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

              <Folder
                title="Spotify"
                input={spotifyFolder}
                output={setSpotifyFolder} />
              <Folder
                title="Trello"
                input={trelloFolder}
                output={setTrelloFolder} />

            </div>

            <Downloads { ...store.gem } />
            <Downloads { ...store.npm } />

            {/* <Button className="pause-play" variant="link" onClick={() => pause(!store.pause)}>
              { store.pause ? <PlaySvg /> : <PauseSvg /> }
            </Button> */}

          </div>
        </div>

        <CreditBlock />

      </div>
    </div>
  );
};
