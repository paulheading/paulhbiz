import axios from "axios";

export default function getTreehouse() {
  return axios
    .get('/api/treehouse')
    .then(({ data }) => {
      console.log("treehouse: ", data);
      return data;
    })
    .catch(err => console.log(err));
}