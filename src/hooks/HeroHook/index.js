import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "modules/_helpers";
import { hero } from "store/actions";

export default function HeroHook() {
  
  const store = {
    hero: useSelector(state => state.hero),
    pause: useSelector(state => state.pause),
    trello: useSelector(state => state.trello),
    count: useSelector(state => state.count),
  };

  const write = useDispatch();
  const live = store.trello.ready;
  const cards = store.trello.projects.cards;

  useEffect(() => {
    if (live) {
      write(hero({ feed: filter.in.hero(cards), card: filter.in.hero(cards)[store.count] }));
    }
  }, [write, live, cards, store.count, store.pause]);

  return null;
  
};