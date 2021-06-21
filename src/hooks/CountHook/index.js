import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { count } from "store/actions";

export default function CountHook() {
  const store = {
    trello: useSelector(state => state.trello),
    count: useSelector(state => state.count),
    hero: useSelector(state => state.hero),
  };
  const write = useDispatch();
  const ready = store.trello.ready;
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