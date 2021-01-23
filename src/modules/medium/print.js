import { objectReady } from "../helpers";
import { printSummary } from "../helpers/summary";

export function printBlogSummary(feed) {
  if (!objectReady(feed)) {
    return printSummary();
  } else {
    return printSummary(feed);
  }
}
