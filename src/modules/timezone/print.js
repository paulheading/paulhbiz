import { objectReady } from "../helpers";
import { WifiSvg } from "../../Components/SvgIcons";

function printLocation(location) {
  return <span>{location}</span>;
}

function printDateTime(time) {
  return <span>{time}</span>;
}

export function printTopbar(timezone) {
  if (!objectReady(timezone)) {
    return (
      <div className="desktop-topbar__container">
        <div className="desktop-topbar__status placeholder">.</div>
        <div className="desktop-topbar__status">
          <WifiSvg />
        </div>
        <div className="desktop-topbar__status placeholder">.</div>
      </div>
    );
  } else {
    return (
      <div className="desktop-topbar__container">
        <div className="desktop-topbar__status">
          {printLocation(timezone.location)}
        </div>
        <div className="desktop-topbar__status">
          <WifiSvg />
        </div>
        <div className="desktop-topbar__status">
          {printDateTime(timezone.time)}
        </div>
      </div>
    );
  }
}
