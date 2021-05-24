import { useSelector } from "react-redux";
import { object } from "modules/helpers";
import parse from "html-react-parser";

export default function TrelloPage({ name, links }) {
  const trello = useSelector(state => state.trello);
  const card = object.ready(trello) && trello.pages.cards.filter(card => name === card.name)[0];
  let content = "";
   
  if (!card) { 
    if (!links) { content += `<h1>${ name }</h1>`; }
    for (let index = 0; index < 3; index++) { content += "<p class='placeholder'>.</p>"; }
  } else {
    if (links) {
      let attachments = "";
      card.attachments.forEach(card => attachments += `<a class="link__social" href="${card.url}">${card.name}</a>`);
      content = attachments;
    } else {
      content = card.desc;
    }  
  }

  return <div className={`component trello-page ${name.toLowerCase()}`}>{parse(content)}</div>;
};
