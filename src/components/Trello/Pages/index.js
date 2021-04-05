import { connect, useSelector } from "react-redux";
import { objectReady, parse } from "modules/helpers";

function TrelloPage({ name, links }) {
  const trello = useSelector((state) => state.trelloData);
  const ready = objectReady(trello);
  let content = "";

  if (ready) { 
    trello.pages.cards.forEach(card => {
      if (name === card.name) {
        if (links) {
          let attachments = "";
          card.attachments.forEach(card => {
            attachments += `<a class="link__social" href="${card.url}">${card.name}</a>`; 
          });
          content = attachments;
        } else {
          content = card.desc;
        }
      }
    }); 
  } else {
    content += "<h1 class='placeholder'>.</h1>";
    const copy = "<p class='placeholder'>.</p>";
    for (let index = 0; index < 3; index++) {
      content += copy;      
    }
  }
    
  return parse(content);
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(TrelloPage);
