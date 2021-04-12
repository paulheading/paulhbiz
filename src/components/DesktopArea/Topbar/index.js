import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { WifiSvg } from "components/SvgIcons";
import { objectReady } from "modules/helpers";
import { wifiSignal } from "modules/animations";
import getTimezoneData from "modules/timezone";
import { timezoneData } from "actions";

function DesktopTopbar({ timezoneData }) {
  const timezone = useSelector((state) => state.timezoneData);
  const ready = objectReady(timezone);

  useEffect(() => {
    (async () => timezoneData(await getTimezoneData()))();
  }, [timezoneData]);

  useEffect(() => {
    wifiSignal();
  }, []);

  return (
    <div className="desktop-topbar__container">
      {ready ? (
        <div className="desktop-topbar__status">
          <span>{timezone.location}</span>
        </div>
      ) : (
        <div className="desktop-topbar__status placeholder">.</div>
      )}
      <div className="desktop-topbar__status">
        <WifiSvg />
      </div>
      {ready ? (
        <div className="desktop-topbar__status">
          <span>{timezone.time}</span>
        </div>
      ) : (
        <div className="desktop-topbar__status placeholder">.</div>
      )}
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{ timezoneData })(DesktopTopbar);
