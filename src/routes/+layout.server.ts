import { hasAbout } from "$lib/server/about";
import { getSummaries } from "$lib/server/post";

export async function load() {
  return {
    hasAbout: hasAbout(),
    postSummaries: await getSummaries(),
  };
}
