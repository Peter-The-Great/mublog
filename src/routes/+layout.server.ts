import { getSummaries } from "$lib/server/post";

export async function load() {
  return {
    postSummaries: await getSummaries(),
  };
}
