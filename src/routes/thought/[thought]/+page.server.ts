import { getPost } from "$lib/server/post";

export async function load({ params }) {
  return {
    post: await getPost(params.thought),
  };
}
