import { JSONContent } from "novel";

export type BLOG_POSTS = {
  id?: string;
  author?: {
    name: string;
  };
  title: string;
  content: JSONContent | undefined;
  createdAt: string;
};

export type USER = {
  username: string;
  name: string
  Post?: POSTS[];
}
export type POSTS = {
  id: number;
  title: string | null | undefined;
  content: JSONContent | undefined;
}

export type EDITOR_PROPS = {
  initalValue?: JSONContent;
  onChange: (value: JSONContent) => void;
}