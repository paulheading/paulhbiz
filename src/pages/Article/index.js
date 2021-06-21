import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { NotFound } from "pages";
import HappyRoute from "./HappyRoute";
import LoadRoute from "./LoadRoute";

export default function ArticlePage() {
  const { pathname } = useLocation();
  const trello = useSelector(state => state.trello);
  const cards = [ ...trello.projects.cards, ...trello.roles.cards, ...trello.education.cards];
  let valid = false;
  let data = {};

  function validateRoute() { 
    if (!trello.ready) {
      return <LoadRoute />;
    } else {
      cards.forEach(card => { if (card.route === pathname) { valid = true; data = card; }});
      return valid ? <HappyRoute { ...data } /> : <NotFound />;
    }
  }

  return validateRoute();
}
