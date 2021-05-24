import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { TrelloPage } from "components/Trello";
import { object } from "modules/helpers";

export default function AboutPage() {
  const store = {
    trello: useSelector(state => state.trello),
    seo: useSelector(state => state.seo)
  }

  const print = {
    link: object.ready(store.trello) ? <p>My online resume is <Link to="/resume">available here</Link>.</p> : <p className="placeholder">.</p>
  }

  const seo = store.seo.about;

  return (
    <div className="component about-content">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>
      <div className="container feed-content">
        <div className="wrap feed-content">
          <TrelloPage name="About" />
          { print.link }
        </div>
      </div>
    </div>
  );
}
