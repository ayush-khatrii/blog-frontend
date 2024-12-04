import { ENV } from "@/config/conf";
import { BLOG_POSTS } from "@/types";
import { useQuery } from "@tanstack/react-query";


export const useBlogs = (): {
  blogs: BLOG_POSTS[];
  error: Error | null;
  isLoading: boolean;
} => {
  const { apiUrl } = ENV;

  const fetchBlogs = async () => {
    const resp = await fetch(`${apiUrl}/blog`, {
      method: "GET",
    });

    if (!resp.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const { blogPosts: blogs } = await resp.json();
    return blogs || [];
  }
  const { data: blogs, error, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    staleTime: 10000,
    refetchInterval: 5000,
    refetchOnWindowFocus: true,
  });

  return {
    blogs: blogs || [],
    error,
    isLoading,
  };
}

export const useBlog = (id: number): {
  blogPost: BLOG_POSTS;
  error: Error | null;
  isLoading: boolean;
} => {
  const { apiUrl } = ENV;
  console.log("id from hoooooooooooooook raja ji:::", id);

  const fetchBlogs = async (id: number) => {
    if (!id) throw new Error("Blog ID is required");
    const resp = await fetch(`${apiUrl}/blog/${id}`, {
      method: "GET",
    });

    if (!resp.ok) {
      throw new Error(`Failed to fetch blog with ID ${id}`);
    }

    const { blogPost } = await resp.json();
    return blogPost;
  };

  const { data: blogPost, error, isLoading } = useQuery({
    queryKey: ["blog", id], // Unique key for this query
    queryFn: () => fetchBlogs(id),
  });

  return {
    blogPost: blogPost || null,
    error,
    isLoading,
  };
}

