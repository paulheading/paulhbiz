import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { objectReady } from "@/modules/helpers";
import Summary from "@/Components/Summary";

function AboutContent() {
  const feed = useSelector((state) => state.trelloData);
  const ready = objectReady(feed);
  const data = ready ? feed.projects.cards : feed;

  return (
    <div className="component-about-content">
      <div className="feed-content__container">
        <div className="feed-content__wrap">
          <h1 className="feed-content__title">About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tempus ullamcorper tincidunt. Aliquam posuere ex a lacus placerat
            ullamcorper. Aliquam auctor ante et ornare convallis. In fringilla
            finibus efficitur.
          </p>
          <p>
            Proin at urna lobortis tortor cursus tincidunt.Nunc quam metus,
            egestas ut dictum ac, iaculis vel justo. Cras dictum turpis quis
            libero posuere fringilla. Suspendisse rutrum, mauris vitae mattis
            volutpat, diam dui accumsan ipsum, vitae suscipit arcu nisl
            porttitor dui.
          </p>
          <p>
            Donec sit amet faucibus tortor. Nulla facilisi. Etiam feugiat quam
            ut enim placerat vehicula.
          </p>
          <p>
            Here's my <Link to="/resume">resume</Link>.
          </p>
          <Summary feed={data} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(AboutContent);
