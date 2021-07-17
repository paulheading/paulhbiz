import React from "react";
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import { SpotifyLogo } from "logos";
import { Row } from "react-bootstrap";

export default function SpotifyFeed() {
  const spotify = useSelector(({ spotify }) => spotify);
  const placeholder = !spotify.ready ? "placeholder" : "";
  const profile = spotify.profile;
  const playlist = spotify.playlist;

  const is = {
    tooLong: (title, limit = 18) => title.length > limit ? title.slice(0, limit) + " ..." : title,
  };

  const print = {
    track: (value, index) => {
      return (
        <Row className="spotify-feed" key={`track-${index}`}>
          <div className={`title track-position ${placeholder}`}>{index + 1}</div>
          <div className="wrap track-info">
            <div className="title track-name">
              <a href={value.url} className={`link track-name ${placeholder}`}>{is.tooLong(value.name)}</a>
            </div>
            <div className="title track-artist">
              <a className={`link track-artist ${placeholder}`} href={value.artist.url}>{is.tooLong(value.artist.name)}</a>
            </div>
          </div>
        </Row>
      );
    }
  };

  return (
    <div className="component spotify-feed">
      <Card className="spotify-feed">
        <div className="wrap spotify-header">
          <a href={playlist.url} className="link spotify-playlist">
            { playlist.image && <img src={playlist.image} alt={playlist.owner} className="img spotify-playlist" /> }
          </a>
          <div className="wrap spotify-playlist">
            <div className="wrap playlist-info">
              <div className="title playlist-name">
                <a href={playlist.url} className={`link playlist-name ${placeholder}`}>{playlist.name}</a>
              </div>
              <div className="title playlist-owner">
                <a href={profile} className={`link playlist-owner ${placeholder}`}>{playlist.owner}</a>
              </div>
            </div>
            <div className="wrap spotify-logo">
              <SpotifyLogo />
            </div>
          </div>
        </div>
        <div className="wrap spotify-tracks">
          { spotify.tracks.map(print.track) }
        </div>
      </Card>
    </div>
  );
};
