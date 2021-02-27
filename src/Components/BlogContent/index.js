import React from "react";
import { connect, useSelector } from "react-redux";
import Summary from "@/Components/Summary";

function BlogContent() {
  const feed = useSelector((state) => state.mediumData);

  return (
    <div className="component-about-content">
      <div className="feed-content__container">
        <div className="feed-content__wrap">
          <h1 className="feed-content__title">Blogging is my passion.</h1>
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
          <Summary feed={feed} type="blog" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(BlogContent);
