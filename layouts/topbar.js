import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import get from "scripts/getters";
import { timezone } from "store/actions";
import { Wifi } from "icons";

export default function TopbarLayout() {
  const store = { timezone: useSelector(({ timezone }) => timezone) };
  const placeholder = !store.timezone.ready ? "placeholder" : "";
  const write = useDispatch();

  useEffect(() => (async () => {
    const data = await get.Timezone();
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
