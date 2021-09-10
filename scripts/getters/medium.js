import axios from "axios";

const RSS2JSON = {
  API_KEY: process.env.NEXT_PUBLIC_RSS2JSON_API_KEY,
};

export default async function getMedium() {
  return await axios
    .get("https://api.rss2json.com/v1/api.json", {
      params: {
        rss_url: "https://medium.com/feed/@paulheading",
        api_key: RSS2JSON.API_KEY,
      },
    })
    .then(({ data }) => {
      // data = data.items.map((item, index) => {
      //   item.id = `medium-${index}`;
      //   item.date = item.pubDate;
      //   item.type = "blog";
      //   item.path = `${pathify(item.title)}`;
      //   item.url = `/${item.type}/${item.path}`;
      //   delete item.pubDate;
      //   delete item.enclosure;
      //   return item;
      // });
      console.log("medium: ", data);
      return data;
    })
    .catch((err) => console.error(err));
}
