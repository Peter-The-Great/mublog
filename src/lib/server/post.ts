import type { Post, PostSummary } from "$lib/modules/post";

export const ExampleItem: Post = {
  slug: "example",
  published: new Date(),
  title: "Lorem ipsum dolor sit amet",
  subtitle:
    "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  content:
    "Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<img src='https://longingtostray.files.wordpress.com/2020/04/640px-southern_drygalski_mountains.jpg?w=640'>",
};

export async function getSummaries(): Promise<PostSummary[]> {
  return [
    {
      title: ExampleItem.title,
      subtitle: ExampleItem.subtitle,
      slug: ExampleItem.slug,
    },
  ];
}

export async function getPost(_slug: string): Promise<Post> {
  return ExampleItem; // TODO
}

export async function getLatestPost(): Promise<Post> {
  return ExampleItem; // TODO
}
