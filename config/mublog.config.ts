import type { Link } from "$lib/modules/config";
import type { Author } from "$lib/modules/post";

/* Blog title */
export const title: string = "Blog Title";

/* Blog URL */
export const url: string = "http://localhost:5173";

/* Primary language for blogs */
export const primaryLanguage: string = "en";

/* The default author to use when publishing blogs */
export const defaultAuthor: Author = {
  name: "John Smith",
  shortName: "John",
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
