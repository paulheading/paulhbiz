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

filter.anchors = (value, limit = 0) => {
  value.split('href').forEach(string => string.startsWith('="') ? limit += (string.length - 3) : null);
  return limit;
}

filter.string = (title, limit = 140, output) => {
  if (title.length > limit) {
    output = title.slice(0, limit);
    limit += filter.anchors(output);
    output = title.slice(0, limit);
    // re-trim if we are in the middle of a word
    output = output.substr(0, Math.min(output.length, output.lastIndexOf(' ')));
    output += ' ...';
  } else {
    output = title;
  }
  return parse(output);
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