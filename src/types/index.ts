export type BLOG_POSTS = {
  id?: string;
  author?: {
    name: string;
  };
  title: string;
  content: string;
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
  content: string | null | undefined;
}