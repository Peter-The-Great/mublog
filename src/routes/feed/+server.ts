import RSS from "rss";
import {
  defaultAuthor,
  primaryLanguage,
  title,
  url,
} from "$lib/modules/config";
import { join } from "path";
import { getPost, getSummaries } from "$lib/server/post";

export const prerender = true;

export async function GET() {
  const rss = new RSS({
    title,
    feed_url: join(url, "feed"),
    site_url: url,
    copyright: defaultAuthor.name,
    language: primaryLanguage,
  });

  for (const summary of (await getSummaries()).slice(0, 20)) {
    const post = (await getPost(summary.slug))!;

    rss.item({
      title: `${summary.title} &mdash; ${summary.subtitle}`,
      description: post.content,
      url: join(url, "post", summary.slug),
      guid: summary.slug,
      date: summary.published,
    });
  }

  return new Response(rss.xml(), {
    headers: { "content-type": "application/rss+xml" },
  });
}
