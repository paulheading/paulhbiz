const fetch = require("node-fetch");

const environment = process.env.REACT_APP_ENVIRONMENT;

function getGithubPath(environment) {
  return environment === "production"
    ? "https://api.github.com/users/paulheading"
    : "/github.json";
}

export function getGithubData() {
  return fetch(getGithubPath(environment), {
    method: "GET",
    headers: { Accept: "application/json" },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("github: ", res);
      return res;
    })
    .catch((err) => console.error(err));
}
