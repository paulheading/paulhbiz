import axios from "axios";

export default function getGithubData() {
  return axios
    .get("https://api.github.com/users/paulheading/repos", { headers: { Accept: "application/json" } })
    .then(({ data }) => data)
    .catch(err => console.log(err));
}
