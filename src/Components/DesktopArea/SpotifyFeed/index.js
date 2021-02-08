import React from "react";
import { connect, useSelector } from "react-redux";
import { objectReady } from "../../../modules/helpers";
import { SpotifySvg } from "../../../Components/SvgIcons";

function SpotifyFeed() {
  const spotify = useSelector((state) => state.spotifyData);
  const ready = objectReady(spotify);

  function headerPlaceholder() {
    return (
      <div className="playlist__header">
        <div className="playlist__profile-img placeholder"></div>
        <div className="playlist__profile-wrap">
          <div className="playlist__profile-info">
            <div className="playlist__name placeholder">.</div>
            <div className="playlist__owner placeholder">.</div>
          </div>
          <div className="playlist__logo">
            <SpotifySvg className="placeholder" />
          </div>
        </div>
      </div>
    );
  }

  function headerContent() {
    const profile = spotify.profile;
    const playlist = spotify.playlist;
    return (
      <div className="playlist__header">
        <a className="playlist__profile-img-link" href={playlist.url}>
          <img
            className="playlist__profile-img"
            src={playlist.images[1].url}
            alt={playlist.owner}
          />
        </a>
        <div className="playlist__profile-wrap">
          <div className="playlist__profile-info">
            <div className="playlist__name">
              <a href={playlist.url} className="playlist__name-link">
                <strong>{playlist.name}</strong>
              </a>
            </div>
            <div className="playlist__owner">
              <a href={profile} className="playlist__owner-link">
                {playlist.owner}
              </a>
            </div>
          </div>
          <div className="playlist__logo">
            <SpotifySvg />
          </div>
        </div>
      </div>
    );
  }

  function bodyContent() {
    const last = spotify.tracks.length - 1;
    return spotify.tracks.map((value, index) => {
      return (
        <div
          className={`playlist__row ${isTopTrack(index)} ${isLastTrack(
            last,
            index
          )}`}
          key={value.id}
        >
          <div className="track-position">{index + 1}</div>
          <div className="track-info">
            <div className="track-title">
              <a href={value.url} className="track-title-link">
                {isTooLong(value.name)}
              </a>
            </div>
            <div className="track-artist">
              <a
                className="track-artist-link"
                href={value.artists[0].external_urls.spotify}
              >
                {isTooLong(value.artists[0].name)}
              </a>
            </div>
          </div>
        </div>
      );
    });
  }

  function bodyPlaceholder() {
    return (
      <div>
        {printRow("top-track")}
        {printRow()}
        {printRow("last-track")}
      </div>
    );
  }

  function isTopTrack(index) {
    return index === 0 ? "top-track" : "";
  }

  function isLastTrack(last, index) {
    return last === index ? "last-track" : "";
  }

  function isTooLong(title) {
    const limit = 18;
    if (title.length > limit) {
      return title.slice(0, limit) + " ...";
    }
    return title;
  }

  function printRow(position) {
    if (!position) {
      position = "";
    }
    return (
      <div className={`playlist__row ${position}`}>
        <div className="track-position placeholder">.</div>
        <div className="track-info">
          <div className="track-title placeholder">.</div>
          <div className="track-artist placeholder">.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="window__container">
      <div className="window__wrap spotify">
        {ready ? headerContent() : headerPlaceholder()}
        <div className="playlist__track-wrap">
          {ready ? bodyContent() : bodyPlaceholder()}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(SpotifyFeed);
