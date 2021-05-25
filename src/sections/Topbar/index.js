import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { object } from "modules/helpers";
import getTimezoneData from "modules/timezone";
import { timezone } from "actions";
import { WifiSignal } from "hooks";

export default function TopbarSection() {
  const store = { timezone: useSelector(state => state.timezone) };
  const write = useDispatch();
  
  const placeholder = !object.ready(store.timezone) ? "placeholder" : "";
  const location = object.ready(store.timezone) ? store.timezone.location : ".";
  const time = object.ready(store.timezone) ? store.timezone.time : ".";

  useEffect(() => (async () => write(timezone(await getTimezoneData())))(), [write]);

  return (
    <div className="component desktop-topbar">
      <div className={`status desktop-topbar ${placeholder}`}>
        <span>{location}</span>
      </div>      
      <div className="status desktop-topbar">
        <WifiSignal />
      </div>
      <div className={`status desktop-topbar ${placeholder}`}>
        <span>{time}</span>
      </div>
    </div>
  );
};
