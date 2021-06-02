import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { object } from "modules/_helpers";
import { getTimezoneData } from "modules";
import { timezone } from "store/actions";
import { WifiHook } from "hooks";

export default function TopbarBlock() {
  const store = { timezone: useSelector(state => state.timezone) };
  const write = useDispatch();
  
  const placeholder = !object.ready(store.timezone) ? "placeholder" : "";
  const location = object.ready(store.timezone) ? store.timezone.location : ".";
  const time = object.ready(store.timezone) ? store.timezone.time : ".";

  useEffect(() => (async () => write(timezone(await getTimezoneData())))(), [write]);

  return (
    <div className="component topbar-block">
      <div className={`status topbar-block ${placeholder}`}>
        <span>{location}</span>
      </div>      
      <div className="status topbar-block">
        <WifiHook />
      </div>
      <div className={`status topbar-block ${placeholder}`}>
        <span>{time}</span>
      </div>
    </div>
  );
};
