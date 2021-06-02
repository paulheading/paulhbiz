import axios from "axios";

export default function getUdemyData() {
  const yourtoken = `mmvjnbIZE4F99cXwrlBYqN8booW8NSTGlv9avrtD:fOC2smZ7WlzupWWtDJv5xPHZYj6jrPbsy8vrpX4H9PzRCq1NEdVp8wenMNU0XhlROsFFUYmH7tQat0jkOeWrbm6285eCtyQPp62qf0FDs8Q83WEtFNO6aXlU7XZS6J9q`;
  return axios
    .get("https://www.udemy.com/api-2.0/courses/238934", {
      headers: {
        Authorization: yourtoken,
      },
    })
    .then(({ data }) => data)
    .catch((err) => console.error(err));
}
