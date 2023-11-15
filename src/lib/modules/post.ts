export type Author = {
  name: string;
  shortName?: string;
  url: string;
};

export type Post = {
  slug: string;
  published: Date;
  title: string;
  subtitle?: string;
  cover?: string;
  language: string;
  content: string;
};

export type PostSummary = Omit<Post, "content">;

export type PostMeta = Omit<PostSummary, "slug">;
