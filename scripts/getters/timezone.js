import axios from "axios";

export default function getTimezone() {
  return axios
    .get('/api/timezone')
    .then(({ data }) => {
      console.log("timezone: ", data);
      return data;
    })
    .catch(err => console.log(err));
}
