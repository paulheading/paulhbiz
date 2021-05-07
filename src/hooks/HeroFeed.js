import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { object, filter } from "modules/helpers";
import { hero } from "actions";

function HeroFeed({ hero }) {
  const store = {
    hero: useSelector(state => state.hero),
    pause: useSelector(state => state.pause),
    trello: useSelector(state => state.trello),
    count: useSelector(state => state.count),
  };

  useEffect(() => {
    if (object.ready(store.trello) && !store.pause) {
      hero({
        feed: filter.in.hero(store.trello.projects.cards),
        card: filter.in.hero(store.trello.projects.cards)[store.count]
      });
    }
  }, [hero, store.count, store.trello, store.pause]);

  return null;
  
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { hero })(HeroFeed);