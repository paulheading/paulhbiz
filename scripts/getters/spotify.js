import axios from "axios";

const SPOTIFY = {
  USER_ID: process.env.NEXT_PUBLIC_SPOTIFY_USER_ID,
  PLAYLIST_ID: process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID,
  CLIENT_ID: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  CLIENT_SECRET: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
  TOKEN_BASE: "https://accounts.spotify.com/api/token",
  API_BASE: "https://api.spotify.com/v1",
};

function getToken() {
  return fetch(SPOTIFY.TOKEN_BASE, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + btoa(`${SPOTIFY.CLIENT_ID}:${SPOTIFY.CLIENT_SECRET}`),
    },
    body: "grant_type=client_credentials",
  })
    .then(res => res.json())
    .then(res => res.access_token)
    .catch(err => console.error(err));
}

async function spotifyData(target = `/users/${SPOTIFY.USER_ID}`) {
  const token = await getToken();
  return await axios
    .get(`${SPOTIFY.API_BASE}${target}`, { headers: { Authorization: "Bearer " + token } })
    .then(({ data }) => data)
    .catch(err => console.error(err));
}

export default async function getSpotify() {
  let data = await spotifyData(`/playlists/${SPOTIFY.PLAYLIST_ID}`);

  if (!data) {
    console.log("failed to getSpotify");
    return null;
  } 
  else {
    if (data.error) { 
      console.log("failed to getSpotify");
      return null;
    } 
    else {
      data = {
        ready: true,
        profile: `https://open.spotify.com/user/${data.owner.display_name}`,
        tracks: data.tracks.items.map(({ track }) => ({
          artist: {
            url: track.artists[0].external_urls.spotify,
            name: track.artists[0].name
          },
          url: track.external_urls.spotify,
          name: track.name,
        })),
        playlist: {
          image: data.images[1].url,
          owner: data.owner.display_name,
          name: data.name,
          url: data.external_urls.spotify,
        },
      };  
      console.log("spotify: ", data);
      return data;
    } 
  }
}
