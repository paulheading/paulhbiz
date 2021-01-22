import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { objectReady, calcRepeat } from "../../modules/helpers";
import { printMarquee } from "../../modules/trello/print";
import { countdown, repeat } from "../../actions";
import { marquee } from "../../modules/animations";

function MarqueeScroll({ countdown, repeat }) {
  const store = {
    trelloData: useSelector((state) => state.trelloData),
    countdown: useSelector((state) => state.countdown),
    repeat: useSelector((state) => state.repeat),
  };

  useEffect(() => {
    marquee.scroll();
  }, []);

  useEffect(() => {
    marquee.restart();
  }, [store.trelloData, store.countdown]);

  useEffect(() => {
    let resize;
    repeat(calcRepeat());
    window.addEventListener("resize", () => {
      clearTimeout(resize);
      resize = setTimeout(() => {
        repeat(calcRepeat());
      }, 100);
    });
  }, [store.trelloData, store.countdown, repeat]);

  useEffect(() => {
    if (objectReady(store.trelloData)) {
      if (store.countdown !== 0) {
        const count = setInterval(() => {
          countdown(store.countdown - 1);
        }, 3000);
        return () => {
          clearInterval(count);
        };
      } else {
        return setTimeout(() => {
          let reset = store.trelloData.hero.cards;
          reset = reset.length - 1;
          countdown(reset);
        }, 3000);
      }
    }
  }, [store.trelloData, store.countdown, countdown]);

  return (
    <div className="component-marquee-scroll">
      <div className="marquee-link__container">
        {printMarquee.link(store.trelloData, store.countdown)}
      </div>
      <div className="marquee-scroll__container">
        <div className="marquee-scroll__wrap">
          {printMarquee.title(store.trelloData, store.countdown, store.repeat)}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  countdown,
  repeat,
})(MarqueeScroll);
