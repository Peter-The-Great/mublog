import { getLatestPost } from "$lib/server/post";

export async function load() {
  return {
    post: await getLatestPost(),
  };
}
