import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { printDesktop } from "../../modules/trello/print";
import { makeDraggable, wifiSignal } from "../../modules/animations";

function DesktopArea() {
  useEffect(() => {
    makeDraggable();
    wifiSignal();
  }, []);
  const store = {
    timezoneData: useSelector((state) => state.timezoneData),
    spotifyData: useSelector((state) => state.spotifyData),
    trelloData: useSelector((state) => state.trelloData),
  };
  return (
    <div className="component-desktop-area">
      {printDesktop.topbar(store.timezoneData)}
      <div className="desktop-content__container">
        <div className="desktop-content__wrap">
          <div className="desktop-content__windows">
            {printDesktop.playlist(store.spotifyData)}
            {printDesktop.projects(store.trelloData)}
          </div>
          {/* <div className="desktop-content__folders">
            <div className="folder__container">
              <div className="folder__wrap">folder 1</div>
            </div>
            <div className="folder__container">
              <div className="folder__wrap">folder 2</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(DesktopArea);
