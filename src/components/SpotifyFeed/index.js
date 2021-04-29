import React from "react";
import { connect, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import { object } from "modules/helpers";
import { SpotifySvg } from "components/SvgIcons";
import { Row } from "react-bootstrap";

function SpotifyFeed() {
  const spotify = useSelector((state) => state.spotifyData);
  const ready = object.ready(spotify);

  function headerPlaceholder() {
    return (
      <div className="spotify-feed header">
        <div className="spotify-feed profile-img placeholder"></div>
        <div className="spotify-feed profile-wrap">
          <div className="spotify-feed profile-info">
            <div className="spotify-feed name placeholder">.</div>
            <div className="spotify-feed owner placeholder">.</div>
          </div>
          <div className="spotify-feed logo">
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
      <div className="spotify-feed header">
        <a className="spotify-feed profile-img-link" href={playlist.url}>
          <img className="spotify-feed profile-img" src={playlist.images[1].url} alt={playlist.owner}/>
        </a>
        <div className="spotify-feed profile-wrap">
          <div className="spotify-feed profile-info">
            <div className="spotify-feed name">
              <a href={playlist.url} className="spotify-feed name-link">
                <strong>{playlist.name}</strong>
              </a>
            </div>
            <div className="spotify-feed owner">
              <a href={profile} className="spotify-feed owner-link">
                {playlist.owner}
              </a>
            </div>
          </div>
          <div className="spotify-feed logo">
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
        <Row className={`spotify-feed ${isTopTrack(index)} ${isLastTrack(last, index)}`} key={value.id}>
          <div className="track-position">{index + 1}</div>
          <div className="track-info">
            <div className="track-title">
              <a href={value.url} className="track-title-link">
                {isTooLong(value.name)}
              </a>
            </div>
            <div className="track-artist">
              <a className="track-artist-link" href={value.artists[0].external_urls.spotify}>
                {isTooLong(value.artists[0].name)}
              </a>
            </div>
          </div>
        </Row>
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
    return index === 0 ? "top-track" : '';
  }

  function isLastTrack(last, index) {
    return last === index ? "last-track" : '';
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
      <div className={`spotify-feed row ${position}`}>
        <div className="track-position placeholder">.</div>
        <div className="track-info">
          <div className="track-title placeholder">.</div>
          <div className="track-artist placeholder">.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container spotify-feed">
      <Card className="spotify-wrap">
        {ready ? headerContent() : headerPlaceholder()}
        <div className="wrap spotify-feed">
          {ready ? bodyContent() : bodyPlaceholder()}
        </div>
      </Card>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(SpotifyFeed);
