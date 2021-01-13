import Badge from "react-bootstrap/Badge";
import { objectReady } from "../helpers";

function handleSkills(skills) {
  let list = Object.keys(skills);

  list.sort((a, b) => {
    if (skills[a] > skills[b]) return -1;
    if (skills[a] < skills[b]) return 1;
    return 0;
  });

  return list.map((topic, index) => {
    const points = skills[topic];
    if (topic !== "total") {
      if (points > 100) {
        return (
          <Badge
            className="purple"
            key={`skill-${index}`}
          >{`${topic} ${points}`}</Badge>
        );
      }
      return null;
    }
    return null;
  });
}

export function printResumeSkills(skills) {
  if (!objectReady(skills)) {
    return (
      <div className="page-content__row">
        <h2 className="column__title placeholder skills">.</h2>
        <div className="page-content__row triple skills">
          <Badge>.</Badge>
        </div>
      </div>
    );
  } else {
    skills = skills.points;
    return (
      <div className="page-content__row">
        <h2 className="column__title">Skills</h2>
        <div className="page-content__row triple skills">
          {handleSkills(skills)}
        </div>
      </div>
    );
  }
}
