import { getSummaries } from "$lib/server/post";

export async function load() {
  return {
    summaries: await getSummaries(),
  };
}
