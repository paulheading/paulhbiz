import React from "react";
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import { SpotifySvg } from "icons";
import { Row } from "react-bootstrap";

export default function SpotifyFeed() {
  const spotify = useSelector((state) => state.spotify);
  const profile = spotify.profile;
  const playlist = spotify.playlist;
  const last = spotify.tracks.length - 1;

  const is = {
    topTrack: index => index === 0 ? "top-track" : '',
    lastTrack: (last, index) => last === index ? "last-track" : '',
    tooLong: (title, limit = 18) => title.length > limit ? title.slice(0, limit) + " ..." : title,
  };

  const print = {
    track: (value, index) => {
      return (
        <Row className={`spotify-feed ${is.topTrack(index)} ${is.lastTrack(last, index)}`} key={`track-${index}`}>
          <div className="track-position">{index + 1}</div>
          <div className="track-info">
            <div className="track-title">
              <a href={value.url} className="track-title-link">{is.tooLong(value.name)}</a>
            </div>
            <div className="track-artist">
              <a className="track-artist-link" href={value.artists[0].external_urls.spotify}>{is.tooLong(value.artists[0].name)}</a>
            </div>
          </div>
        </Row>
      );
    }
  };

  return (
    <div className="container spotify-feed">
      <Card className="spotify-wrap">
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
        <div className="wrap spotify-feed">
          { spotify.tracks.map(print.track) }
        </div>
      </Card>
    </div>
  );
};
