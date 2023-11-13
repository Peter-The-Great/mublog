import { getAbout, hasAbout } from "$lib/server/about";
import { error } from "@sveltejs/kit";

export async function load() {
  if (!hasAbout()) {
    throw error(404);
  }

  return {
    about: getAbout(),
  };
}
