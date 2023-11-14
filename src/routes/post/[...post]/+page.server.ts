import { getPost } from "$lib/server/post";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const post = await getPost(params.post);

  if (!post) {
    throw error(404);
  }

  return { post };
}
