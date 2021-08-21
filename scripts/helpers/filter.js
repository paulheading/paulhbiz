import parse from "html-react-parser";

const filter = {};

filter.in = {
  hero: value => value.filter(({ name }) => name.startsWith("Hero: ")),
  more: value => value.filter(({ name }) => name === "Read more")[0],
  medium: value => value.filter(({ name }) => name === "Medium")[0],
  live: value => value.filter(({ name }) => name === "Live")[0],
  code: value => value.filter(({ name }) => name === "Code")[0]
};

filter.out = {
  hero: value => value.filter(({ name }) => !name.startsWith("Hero: "))
}

filter.string = (title, limit = 140) => {
  if (title.length > limit) {
    title = title.slice(0, limit) + '...';
  }
  return parse(title);
}

filter.trello = (trello, title) => {
  let results = null;
  Object.entries(trello).forEach(entry => {
    const [key, value] = entry;
    if (key !== "ready") {
      if (value.info.name === title) {
        results = value.cards;
      }                    
    }
  });
  return results;
}

export default filter;