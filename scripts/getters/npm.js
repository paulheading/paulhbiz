import axios from "axios";

export default function getNpm() {
  return axios
    .get("https://api.npms.io/v2/package/barbican-reset", {
      headers: { Accept: "application/json" }
    })
    .then(({ data }) => {
      data = data.collected;
      data = {
        downloads: data.npm.downloads[5].count,
        ready: true,
        type: "npm",
        name: data.metadata.name,
        url: data.metadata.links.npm
      }
      console.log("npm: ", data);
      return data;
    })
    .catch(err => console.log(err));
}