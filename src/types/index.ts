
export type BLOG_POSTS = {
  id: number;
  author: {
    name: string
  };
  title: string;
  content: string;
  createdAt: Date;
}