import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTimezoneData } from "modules";
import { timezone } from "store/actions";
import Wifi from "components/Wifi";

export default function TopbarBlock() {
  const store = { timezone: useSelector(state => state.timezone) };
  const placeholder = !store.timezone.ready ? "placeholder" : "";
  const write = useDispatch();

  useEffect(() => (async () => {
    const data = await getTimezoneData();
    if (data) { write(timezone(data)); }
  })(), [write]);

  return (
    <div className="component topbar-block">
      <div className={`status topbar-block ${placeholder}`}>
        <span>{store.timezone.location}</span>
      </div>      
      <div className="status topbar-block"><Wifi /></div>
      <div className={`status topbar-block ${placeholder}`}>
        <span>{store.timezone.time}</span>
      </div>
    </div>
  );
};
