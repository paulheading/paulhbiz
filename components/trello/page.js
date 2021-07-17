import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { print } from "scripts/helpers";

export default function TrelloPage({ name }) {
  const trello = useSelector(({ trello }) => trello);
  const card = trello.ready && trello.pages.cards.filter(card => name === card.name)[0];
  return <div className={`component trello-page ${name.toLowerCase()}`}>{ !card ? print.placeholders(3) : parse(card.desc) }</div>;
};
