import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { objectReady, parse, filter, remove } from "modules/helpers";
import temp from "modules/placeholder";

function HeroContent() {
  const store = {
    trello: useSelector(state => state.trelloData),
    countdown: useSelector(state => state.countdown),
    manifest: useSelector(state => state.manifestData)
  };
  
  // Get SEO information from store
  const manifest = objectReady(store.manifest) && store.manifest;

  let feed = objectReady(store.trello) ? store.trello.projects.cards : temp.trello.projects.cards;
  feed = filter.in.hero(feed);
  const card = feed[store.countdown];

  useEffect(() => card.animation(), [card]);

  function printLink(name) {
    const link = filter.in.readmore(card.attachments);
    return <Link to={link.url}>{remove.hero(name)}</Link>
  }

  const ifHeroName = name => name && <h1 className="hero-content__title">{printLink(name)}</h1>;
  const ifHeroSvg = svg => svg && <div className="hero-content__svg">{parse(card.svg)}</div>;

  return (
    <div className={`component-hero-content ${card.className}`}>
      <Helmet>
        <title>{manifest.title}</title>
        <meta name="description" content={manifest.description} />
      </Helmet>
      <div className="hero-content__container">
        <div className="hero-content__wrap">
          <div>
            {ifHeroName(card.name)}
            {ifHeroSvg(card.svg)}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(HeroContent);
