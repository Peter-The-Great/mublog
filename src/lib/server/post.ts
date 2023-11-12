import type { PostMeta, Post, PostSummary } from "$lib/modules/post";
import { marked } from "marked";
import frontMatter from "front-matter";
import { readFile } from "fs/promises";
import { glob } from "glob";
import { join } from "path";
import dayjs from "dayjs";
import { existsSync } from "fs";

export async function getSummaries(): Promise<PostSummary[]> {
  const files = await glob("posts/**/*.md");

  return (
    await Promise.all(
      files.map(async (item) => {
        const entry = await readFile(item, "utf-8");
        const { attributes: meta } = frontMatter<PostMeta>(entry);

        return {
          title: meta.title,
          subtitle: meta.subtitle,
          published: dayjs(meta.published, "YYYY-MM-DD").toDate(),
          slug: item.replace(/^posts\/(.*)\.md$/, "$1"),
        };
      })
    )
  ).sort((a, b) => b.published.getTime() - a.published.getTime());
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const path = join("posts", slug + ".md");
  if (!existsSync(path)) {
    return undefined;
  }

  const entry = await readFile(path, "utf-8");
  const { attributes: meta, body: content } = frontMatter<PostMeta>(entry);

  return {
    slug,
    content: marked(content),
    published: meta.published,
    title: meta.title,
    subtitle: meta.subtitle,
  };
}

export async function getLatestPost(): Promise<Post | undefined> {
  const summaries = await getSummaries();
  if (!summaries.length) {
    return undefined;
  }

  return await getPost(summaries[0].slug);
}
