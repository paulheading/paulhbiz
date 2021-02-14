import React from "react";
import { objectReady } from "../../modules/helpers";
import SummaryCards from "./Components/Cards";

export default function Summary({ feed, type = "about" }) {
  const ready = objectReady(feed);
  const placeholder = [];
  let data = ready ? feed : placeholder;

  for (let index = 0; index < 3; index++) {
    placeholder.push({
      placeholder: true,
      name: ".",
      index,
    });
  }

  data = data.map((item) => {
    if (!item.title) {
      item.title = item.name;
    }
    return item;
  });

  console.log("data: ", data);

  return (
    <div className="summary__container">
      {data.map((item, index) => {
        return <SummaryCards key={index} card={item} type={type} />;
      })}
    </div>
  );
}
