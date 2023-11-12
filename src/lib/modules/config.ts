export type DisplayMessages = { post: { authored_by: string } };

export type Display = {
  [key in "en" | "nl"]: DisplayMessages;
};

export type Link = {
  title: string;
  url: string;
  icon: string;
};

export * from "../../../thoughts.config";
