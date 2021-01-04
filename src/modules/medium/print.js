import { objectReady, printSummary } from "../helpers";

export function printBlogSummary(feed) {
  if (!objectReady(feed)) {
    return printSummary();
  } else {
    return printSummary(feed);
  }
}
