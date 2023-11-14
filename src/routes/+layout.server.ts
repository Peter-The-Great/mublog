import { hasAbout } from "$lib/server/about";

export async function load() {
  return {
    hasAbout: hasAbout(),
  };
}
