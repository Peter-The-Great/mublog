export type Author = {
  name: string;
  url: string;
};

export type Post = {
  slug: string;
  published: Date;
  title: string;
  subtitle?: string;
  content: string;
};

export type PostSummary = Omit<Post, "content">;

export type PostMeta = Omit<PostSummary, "slug">;
