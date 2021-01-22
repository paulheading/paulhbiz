import { objectReady } from "../index";
import Badge from "react-bootstrap/Badge";

export function skillsData(feed, props) {
  if (!objectReady(feed)) {
    return {
      placeholder: true,
      skills: {
        Javascript: 100,
        Databases: 100,
        Design: 100,
      },
      title: ".",
    };
  } else {
    return {
      placeholder: false,
      skills: feed.points,
      title: props.title,
    };
  }
}

export function printSkills(skills, placeholder) {
  let list = Object.keys(skills);

  list.sort((a, b) => {
    if (skills[a] > skills[b]) return -1;
    if (skills[a] < skills[b]) return 1;
    return 0;
  });

  return list.map((topic, index) => {
    const points = skills[topic];
    if (topic !== "total") {
      if (points >= 100) {
        return (
          <Badge
            className={`${placeholder ? "placeholder" : "purple"}`}
            key={`skill-${index}`}
          >{`${topic} ${points}`}</Badge>
        );
      }
      return null;
    }
    return null;
  });
}
