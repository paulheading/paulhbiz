import axios from "axios";

export default function Github() {
  return axios
    .get("https://api.github.com/users/paulheading/repos", { headers: { Accept: "application/json" } })
    .then(({ data }) => {
      console.log("github: ", data);
      return data;
    })
    .catch(err => console.log(err));
}
