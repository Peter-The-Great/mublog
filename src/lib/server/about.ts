import { existsSync } from "fs";
import { readFile } from "fs/promises";
import { marked } from "marked";
import { join } from "path";

const aboutPath = join("config", "about.md");

export function hasAbout() {
  return existsSync(aboutPath);
}

export async function getAbout() {
  const about = await readFile(aboutPath, "utf-8");

  return marked(about);
}
