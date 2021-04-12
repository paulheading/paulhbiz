import axios from "axios";

const TREEHOUSE_API = "https://teamtreehouse.com/paulheading.json";

export default function getTreehouseData() {
  return axios
    .get(TREEHOUSE_API, { headers: { Accept: "application/json" }})
    .then(({ data }) => {
      data = {
        badges: data.badges,
        points: data.points,
        profile_name: data.profile_name,
        profile_url: data.profile_url,
      };
      console.log("treehouse: ", data);
      return data;
    });
}
