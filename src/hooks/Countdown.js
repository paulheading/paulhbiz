import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { object } from "modules/helpers";
import { count } from "actions";

function Countdown({ count }) {
  const store = {
    trello: useSelector(state => state.trello),
    count: useSelector(state => state.count),
    hero: useSelector(state => state.hero),
  };

  const ready = object.ready(store.trello);
  const feed = store.hero.feed;
  const speed = 4000;

  useEffect(() => {
    if (ready) {
      if (store.count > 0) {
        const other = setInterval(() => count(store.count - 1), speed);
        return () => clearInterval(other);
      } else {
        return setTimeout(() => count(feed.length - 1), speed);
      }
    }
  }, [ready, feed, store.count, count]);

  return null;
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{ count })(Countdown);