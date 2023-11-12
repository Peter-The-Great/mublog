import type { Display, Link } from "$lib/modules/config";
import type { Author } from "$lib/modules/post";

/* Blog title */
export const title: string = "Blog Title";

/* The default author to use when publishing blogs */
export const defaultAuthor: Author = {
  name: "John Smith",
  url: "https://example.com",
};

/* Resources to link to */
export const links: Link[] = [
  // {
  //   icon: "mdi:link-variant",
  //   title: "Website",
  //   url: "https://example.com",
  // },
];

export const display: Display = {
  en: { post: { authored_by: "authored by" } },
  nl: { post: { authored_by: "geschreven door" } },
};
