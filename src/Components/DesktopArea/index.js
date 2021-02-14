import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeDraggable } from "../../modules/animations";
import { FolderButton } from "../Buttons/Folder";
import DesktopTopbar from "./DesktopTopbar";
import SpotifyFeed from "./SpotifyFeed";
import TrelloFeed from "./TrelloFeed";
import CreditLine from "../CreditLine";

function DesktopArea() {
  useEffect(() => {
    makeDraggable();
  }, []);

  const [spotifyFolder, setSpotifyFolder] = useState(true);
  const [trelloFolder, setTrelloFolder] = useState(true);

  return (
    <div className="component-desktop-area">
      <DesktopTopbar />
      <div className="desktop-content__container">
        <div className="desktop-content__wrap">
          <div className="desktop-content__windows">
            {spotifyFolder ? <SpotifyFeed /> : null}
            {trelloFolder ? <TrelloFeed /> : null}
          </div>
          <div className="desktop-content__folders">
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
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(DesktopArea);
