const fetch = require("node-fetch");
const TREEHOUSE_API = "https://teamtreehouse.com/paulheading.json";

export function getTreehouseData() {
  return fetch(TREEHOUSE_API, {
    method: "GET",
    headers: { Accept: "application/json" },
  })
    .then((res) => res.json())
    .then((res) => {
      res = {
        badges: res.badges,
        points: res.points,
        profile_name: res.profile_name,
        profile_url: res.profile_url,
      };
      console.log("treehouse: ", res);
      return res;
    });
}
