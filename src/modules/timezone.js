// const fetch = require("node-fetch");
// const TIMEZONE = {
//   API_BASE: "https://www.amdoren.com/api",
//   API_KEY: "GMQ5xyQ7q3VGu7t5eTV96swLPnhbaL",
// };

// export function getTimezoneData() {
//   console.log("called timezone api");
//   return fetch(
//     `${TIMEZONE.API_BASE}/timezone.php?api_key=${TIMEZONE.API_KEY}`,
//     {
//       method: "GET",
//       headers: { Accept: "application/json" },
//     }
//   ).then((res) => res.json());
// }

// const fetch = require("node-fetch");
// const TIMEZONE = {
//   API_BASE: "https://api.ipgeolocation.io/timezone",
//   API_KEY: "c3c3ec3471a84ab89d3011c8c70224d7",
// };

// export function getTimezoneData() {
//   console.log("called timezone api");
//   return fetch(
//     `https://api.ipgeolocation.io/timezone?apiKey=c3c3ec3471a84ab89d3011c8c70224d7&ip=146.199.118.20`,
//     {
//       method: "GET",
//       headers: { Accept: "application/json" },
//     }
//   ).then((res) => res.json());
// }

import axios from "axios";

export default function getTimezoneData() {
  return axios
    .get("/timezone.json", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(({ data }) => {
      console.log("timezone: ", data);
      return data;
    })
    .catch((err) => console.error(err));
}
