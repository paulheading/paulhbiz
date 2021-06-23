import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
// import Button from "react-bootstrap/Button";

import Folder from "components/Folder";
import Downloads from "components/Downloads";
import { SpotifyFeed } from "components/Spotify";
import { TrelloFeed } from "components/Trello";

import { DesktopHook } from "hooks";

// import { PauseSvg, PlaySvg } from "icons";
import { CreditBlock } from "blocks";

import makeDraggable from "animations/desktop";

export default function DesktopBlock() {
  const store = {
    pause: useSelector(state => state.pause),
    gem: useSelector(state => state.gem),
    npm: useSelector(state => state.npm),
  };

  const ref = {
    desktop: useRef(null),
    spotify: useRef(null),
    trello: useRef(null),
  };

  const [spotifyFolder, setSpotifyFolder] = useState(true);
  const [trelloFolder, setTrelloFolder] = useState(true);

  useEffect(() => makeDraggable(ref.desktop.current), [ref.desktop]);

  return (
    <div className="component desktop-block">
      <DesktopHook />
      <div className="container desktop-block">
        <div className="wrap desktop-block">
          
          <div ref={ref.desktop} className="container desktop-windows">

            <div className="position spotify-feed" ref={ref.spotify}>
              <SpotifyFeed />
            </div>

            <div className="position trello-feed" ref={ref.trello}>
              <TrelloFeed />           
            </div>

          </div>
          
          <div className="container desktop-folders">

            <div className="wrap desktop-folders">

              <Folder
                title="Spotify"
                target={ref.spotify.current}
                input={spotifyFolder}
                output={setSpotifyFolder} />
              <Folder
                title="Trello"
                target={ref.trello.current}
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
