import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TrelloPage } from "components/Trello";
import { seo } from "modules";
import Head from "components/Head";

export default function AboutPage() {
  const trello = useSelector(state => state.trello);

  const print = {
    link: trello.ready ? <p className="copy resume-link">My online resume is <Link to="/resume">available here</Link>.</p> : <p className="copy resume-link placeholder">.</p>
  }

  return (
    <div className="component about-content">
      <Head { ...seo.about } />
       <div className="container feed-content">
        <div className="wrap feed-content">
          <TrelloPage name="About" />
          { print.link }
        </div>
      </div>
    </div>
  );
}
