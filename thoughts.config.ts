import type { Link } from "$lib/modules/links";
import type { Author } from "$lib/modules/post";

/* Blog title */
export const title: string = "Thoughts";

/* The default author to use when publishing blogs */
export const defaultAuthor: Author = {
  name: "Kees van Voorthuizen",
  url: "https://keesvv.nl",
};

/* Resources to link to */
export const links: Link[] = [
  {
    icon: "mdi:linkedin",
    title: "LinkedIn",
    url: "https://linkedin.com/in/keesvv",
  },
  {
    icon: "mdi:github",
    title: "GitHub",
    url: "https://github.com/keesvv",
  },
  {
    icon: "mdi:link-variant",
    title: "Portfolio",
    url: "https://keesvv.nl",
  },
];
