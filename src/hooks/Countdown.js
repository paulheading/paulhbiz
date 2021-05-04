import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { object } from "modules/helpers";
import { countdown } from "actions";

function Countdown({ feed, countdown }) {
  const store = {
    trello: useSelector(state => state.trelloData),
    countdown: useSelector(state => state.countdown),
  };

  const ready = object.ready(store.trello);
  const speed = 3000;

  useEffect(() => {
    if (ready) {
      if (store.countdown > 0) {
        const count = setInterval(() => countdown(store.countdown - 1), speed);
        return () => clearInterval(count);
      } else {
        return setTimeout(() => countdown(feed.length - 1), speed);
      }
    }
  }, [ready, feed, store.countdown, countdown]);

  return null;
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{ countdown })(Countdown);