import { connect, useSelector } from "react-redux";
import { objectReady, parse } from "modules/helpers";

function TrelloPage({ name, links }) {
  const trello = useSelector((state) => state.trelloData);
  const card = objectReady(trello) && trello.pages.cards.filter(card => name === card.name)[0];
  let content = "";
   
  if (!card) { 
    if (!links) { content += "<h1 class='placeholder'>.</h1>"; }
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

  return parse(content);
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TrelloPage);
