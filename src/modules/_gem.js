import axios from "axios";

export default function getGemData() {
  return axios
    .get("https://rubygems.org/api/v1/gems/futuro", {
      headers: { Accept: "application/json" }
    })
    .then(({ data }) => {
      data = {
        downloads: data.downloads,
        ready: true,
        type: "gem",
        title: data.name,
        url: data.project_uri
      };
      console.log("gem: ", data);
      return data;      
    })
    .catch(err => console.log(err));
}