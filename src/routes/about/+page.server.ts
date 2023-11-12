import { readFile } from "fs/promises";
import { marked } from "marked";

export async function load() {
  const about = await readFile("config/about.md", "utf-8");

  return {
    about: marked(about),
  };
}
