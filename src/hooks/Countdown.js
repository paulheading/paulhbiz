import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { object } from "modules/helpers";
import { count } from "actions";

export default function Countdown() {
  const store = {
    trello: useSelector(state => state.trello),
    count: useSelector(state => state.count),
    hero: useSelector(state => state.hero),
  };
  const write = useDispatch();

  const ready = object.ready(store.trello);
  const feed = store.hero.feed;
  const speed = 4000;

  useEffect(() => {
    if (ready) {
      if (store.count > 0) {
        const other = setInterval(() => write(count(store.count - 1)), speed);
        return () => clearInterval(other);
      } else {
        return setTimeout(() => write(count(feed.length - 1)), speed);
      }
    }
  }, [ready, feed, store.count, write]);

  return null;
};