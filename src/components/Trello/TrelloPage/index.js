import { connect, useSelector } from "react-redux";
import { objectReady, parse } from "modules/helpers";

function TrelloPage({ name }) {
  const trello = useSelector((state) => state.trelloData);
  const ready = objectReady(trello);

  function printPage() {
    let content = "placeholder";
    
    if (ready) { 
      trello.pages.cards.map((card) => name === card.name ? content = card.desc : null); 
    }

    return parse(content);    
  }

  return printPage();
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(TrelloPage);
