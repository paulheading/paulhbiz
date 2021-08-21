import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
// import Button from "react-bootstrap/Button";

import { SpotifyFeed, TrelloFeed, Folder, Downloads } from "components";
import { DesktopHook } from "hooks";

// import { PauseSvg, PlaySvg } from "icons";
import { Credit } from "layouts";

import gsap from 'gsap';
import { Draggable } from 'gsap/dist/Draggable';

export default function DesktopLayout() {
  const store = {
    pause: useSelector(({ pause }) => pause),
    gem: useSelector(({ gem }) => gem),
    npm: useSelector(({ npm }) => npm),
  };

  const ref = {
    desktop: useRef(null),
    spotify: useRef(null),
    trello: useRef(null),
  };

  const [spotifyFolder, setSpotifyFolder] = useState(true);
  const [trelloFolder, setTrelloFolder] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(Draggable);
    const makeDraggable = target => Draggable.create(target.children);
    makeDraggable(ref.desktop.current);
  }, [ref.desktop]);

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

          </div>
        </div>
      </div>

      <Credit />

    </div>
  );
};