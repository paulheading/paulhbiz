import axios from "axios";

function getToken() {
  return fetch("https://oauth.reddit.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + btoa(`_fUH34HX4kU9fA:QkYYpjtPsp6SP9O0zb28pACPBd81vw`),
    },
    body: "grant_type=authorization_code&code=CODE&redirect_uri=URI",
  })
    .then((res) => res.json())
    .then((res) => res.access_token)
    .catch((err) => console.error(err));
}

export default async function getReddit() {
  const token = await getToken();
  return await axios
    .get(`https://www.reddit.com/api/v1/me`, {
      headers: { Authorization: "Bearer " + token },
    })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
}
