import axios from "axios";

export default function getRubyGemsData() {
  return axios
    .get("https://rubygems.org/api/v1/gems/futuro", {
      headers: { Accept: "application/json" },
    })
    .then(({ data }) => {
      console.log("futuro ruby gem: ", data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}
