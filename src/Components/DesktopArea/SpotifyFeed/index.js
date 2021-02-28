import React from "react";
import { connect, useSelector } from "react-redux";
import { objectReady } from "modules/helpers";
import { SpotifySvg } from "components/SvgIcons";

function SpotifyFeed() {
  const spotify = useSelector((state) => state.spotifyData);
  const ready = objectReady(spotify);

  function headerPlaceholder() {
    return (
      <div className="spotify-feed__header">
        <div className="spotify-feed__profile-img placeholder"></div>
        <div className="spotify-feed__profile-wrap">
          <div className="spotify-feed__profile-info">
            <div className="spotify-feed__name placeholder">.</div>
            <div className="spotify-feed__owner placeholder">.</div>
          </div>
          <div className="spotify-feed__logo">
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
      <div className="spotify-feed__header">
        <a className="spotify-feed__profile-img-link" href={playlist.url}>
          <img
            className="spotify-feed__profile-img"
            src={playlist.images[1].url}
            alt={playlist.owner}
          />
        </a>
        <div className="spotify-feed__profile-wrap">
          <div className="spotify-feed__profile-info">
            <div className="spotify-feed__name">
              <a href={playlist.url} className="spotify-feed__name-link">
                <strong>{playlist.name}</strong>
              </a>
            </div>
            <div className="spotify-feed__owner">
              <a href={profile} className="spotify-feed__owner-link">
                {playlist.owner}
              </a>
            </div>
          </div>
          <div className="spotify-feed__logo">
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
          className={`spotify-feed__row ${isTopTrack(index)} ${isLastTrack(
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
    return index === 0 && "top-track";
  }

  function isLastTrack(last, index) {
    return last === index && "last-track";
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
      <div className={`spotify-feed__row ${position}`}>
        <div className="track-position placeholder">.</div>
        <div className="track-info">
          <div className="track-title placeholder">.</div>
          <div className="track-artist placeholder">.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="window__container spotify">
      <div className="window__wrap spotify">
        {ready ? headerContent() : headerPlaceholder()}
        <div className="spotify-feed__track-wrap">
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
