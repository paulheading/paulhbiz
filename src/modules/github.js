const axios = require("axios");

const environment = process.env.REACT_APP_ENVIRONMENT;

const githubPath =
  environment === "production"
    ? "https://api.github.com/users/paulheading"
    : "/github.json";

export function getGithubData() {
  return axios
    .get(githubPath, {
      headers: { Accept: "application/json" },
    })
    .then(({ data }) => {
      console.log("github: ", data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}
