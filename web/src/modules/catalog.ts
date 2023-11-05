import { writable } from "svelte/store";

export type Author = {
  name: string;
};

export type BlogItem = {
  slug: string;
  title: string;
  subtitle?: string;
  content: string;
};

export const ExampleItem: BlogItem = {
  slug: "example",
  title: "Lorem ipsum dolor sit amet",
  subtitle:
    "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export const DefaultAuthor: Author = {
  name: "Kees van Voorthuizen",
};

export const catalog = writable<BlogItem[]>([ExampleItem /* TODO: remove */]);
