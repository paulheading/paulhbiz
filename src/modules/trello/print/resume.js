import { resumeComponent } from "./resume.helpers";
import { printResumeSkills } from "../../treehouse";

export const printResume = {
  education: (feed) => {
    return resumeComponent(feed, feed.education, "Education");
  },
  projects: (feed) => {
    return resumeComponent(feed, feed.projects, "Projects");
  },
  roles: (feed) => {
    return resumeComponent(feed, feed.roles, "Roles");
  },
  skills: (feed) => {
    return printResumeSkills(feed);
  },
};
