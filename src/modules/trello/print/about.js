import { objectReady, printSummary } from "../../helpers";

export const printAbout = {
  summary: (feed) => {
    if (!objectReady(feed)) {
      return printSummary();
    }

    feed = feed.projects.cards;
    feed = feed.map((item) => {
      return {
        id: item.id,
        date: item.due,
        labels: item.labels,
        title: item.name,
        type: "about",
      };
    });

    return printSummary(feed);
  },
};
