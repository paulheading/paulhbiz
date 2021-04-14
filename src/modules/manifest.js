import axios from "axios";

export default function getManifestData() {
  return axios
    .get("/manifest.json", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(({ data }) => {
      console.log("manifest: ", data);
      return data;
    })
    .catch((err) => console.error(err));
}