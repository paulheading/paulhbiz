import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { objectReady, parse, remove, filter, check } from "modules/helpers";
import temp from "modules/placeholder";

function HeroContent() {
  const store = {
    trello: useSelector(state => state.trelloData),
    countdown: useSelector(state => state.countdown)
  };
  const ready = objectReady(store.trello);
  let manifest = useSelector(state => state.manifestData);

  let feed = ready ? store.trello.projects.cards : temp.trello.projects.cards;
  feed = filter.keep.hero(feed);
  const card = feed[store.countdown];

  useEffect(() => card.animation(), [card]);

  const ifHeroName = name => name && <h1 className="hero-content__title">{check.linkIsLocal(card.link,remove.hero(card.name))}</h1>;
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
