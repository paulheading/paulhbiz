import axios from "axios";

export default function getGemData() {
  return axios
    .get("https://rubygems.org/api/v1/gems/futuro", {
      headers: { Accept: "application/json" }
    })
    .then(({ data }) => {
      console.log("gem: ", data);
      return data;
    })
    .catch(err => console.log(err));
}
