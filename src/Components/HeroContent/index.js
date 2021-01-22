import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { printHero } from "../../modules/trello/print";
import { hero } from "../../modules/animations";

function HeroContent() {
  const store = {
    trelloData: useSelector((state) => state.trelloData),
    countdown: useSelector((state) => state.countdown),
  };

  useEffect(() => {
    hero.feed(store.trelloData, store.countdown);
  }, [store.trelloData, store.countdown]);

  return (
    <div className="component-hero-content">
      <div className="hero-content__container">
        <div className="hero-content__wrap">
          {printHero.card(store.trelloData, store.countdown)}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(HeroContent);
