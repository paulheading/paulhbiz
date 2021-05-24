import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { object } from "modules/helpers";
import { NotFound } from "pages";
import HappyRoute from "./HappyRoute";
import LoadRoute from "./LoadRoute";
import temp from "modules/placeholder";

export default function ArticlePage() {
  const { pathname } = useLocation();
  const store = { trello: useSelector(state => state.trello) };
  let valid = false;
  let data = {};

  temp.trello.projects.cards.forEach(card => { if (card.route === pathname) { valid = true; data = card; }});

  function validateRoute() { 
    if (!object.ready(store.trello)) {
      return <LoadRoute />;
    } else {
      [ ...store.trello.projects.cards, 
        ...store.trello.roles.cards, 
        ...store.trello.education.cards].forEach(card => { if (card.route === pathname) { valid = true; data = card; }});
      return valid ? <HappyRoute card={data} /> : <NotFound />;
    }
  }

  return validateRoute();
}
