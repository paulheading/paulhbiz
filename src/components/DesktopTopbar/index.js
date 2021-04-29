import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { WifiSvg } from "components/SvgIcons";
import { object } from "modules/helpers";
import { wifiSignal } from "modules/animations";
import getTimezoneData from "modules/timezone";
import { timezoneData } from "actions";

function DesktopTopbar({ timezoneData }) {
  const timezone = useSelector(state => state.timezoneData);
  const placeholder = !object.ready(timezone) ? "placeholder" : "";
  const location = object.ready(timezone) ? timezone.location : ".";
  const time = object.ready(timezone) ? timezone.time : ".";

  useEffect(() => (async () => timezoneData(await getTimezoneData()))(), [timezoneData]);
  useEffect(() => wifiSignal(), []);

  return (
    <div className="component desktop-topbar">
      <div className={`status desktop-topbar ${placeholder}`}>
        <span>{location}</span>
      </div>      
      <div className="status desktop-topbar">
        <WifiSvg />
      </div>
      <div className={`status desktop-topbar ${placeholder}`}>
        <span>{time}</span>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{ timezoneData })(DesktopTopbar);
