import React from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { objectReady } from "modules/helpers";
import NotFound from "components/NotFound";
import HappyRoute from "./HappyRoute";
import LoadRoute from "./LoadRoute";
import temp from "modules/placeholder";

function ArticleContent() {
  const { route } = useParams();
  const store = { trello: useSelector(state => state.trelloData) };
  let valid = false;
  let data = {};

  temp.trello.projects.cards.forEach(card => { if (card.route === route) { valid = true; data = card; }});

  function validateRoute() { 
    if (!objectReady(store.trello)) {
      return <LoadRoute />;
    } else {
      store.trello.projects.cards.forEach(card => { if (card.route === route) { valid = true; data = card; }});
      return valid ? <HappyRoute card={data} /> : <NotFound />;
    }
  }

  return validateRoute();
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ArticleContent);
