import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "scripts/helpers";
import { hero } from "store/actions";

export default function HeroHook() {
  const store = {
    hero: useSelector(({ hero }) => hero),
    pause: useSelector(({ pause }) => pause),
    trello: useSelector(({ trello }) => trello),
    count: useSelector(({ count }) => count),
  };

  const write = useDispatch();
  const ready = store.trello.ready;
  const cards = store.trello.projects.cards;
  
  useEffect(() => {
    const feed = filter.in.hero(cards);
    if (ready) { write(hero({ feed, card: feed[store.count] })); }
  }, [write, ready, cards, store.count, store.pause]);

  return null;  
};