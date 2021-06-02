import axios from "axios";

export default function getNPMData() {
  return axios
    .get("https://api.npms.io/v2/package/barbican-reset", {
      headers: { Accept: "application/json" }
    })
    .then(({ data }) => {
      console.log("npm: ", data);
      return data;
    })
    .catch(err => console.log(err));
}