import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { object, filter } from "modules/helpers";
import { hero } from "actions";

export default function HeroFeed() {
  
  const store = {
    hero: useSelector(state => state.hero),
    pause: useSelector(state => state.pause),
    trello: useSelector(state => state.trello),
    count: useSelector(state => state.count),
  };

  const write = useDispatch();

  useEffect(() => {
    if (object.ready(store.trello) && !store.pause) {
      write(hero({
        feed: filter.in.hero(store.trello.projects.cards),
        card: filter.in.hero(store.trello.projects.cards)[store.count]
      }));
    }
  }, [write, store.count, store.trello, store.pause]);

  return null;
  
};