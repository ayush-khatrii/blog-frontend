import { useEffect } from "react";
import { ENV } from "@/config/conf";
import { BLOG_POSTS } from "@/types";
import { useQuery } from "@tanstack/react-query";


export const useBlogs = (): {
  blogs: BLOG_POSTS[] | null;
  error: Error | null;
  isLoading: boolean;
} => {
  const { apiUrl } = ENV;

  const fetchBlogs = async () => {
    const resp = await fetch(`${apiUrl}/blog`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("auth-token") || "",
      },
    });

    if (!resp.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const { blogPosts: blogs } = await resp.json();
    return blogs;
  }
  const { data: blogs, error, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    staleTime: 10000,
    refetchInterval: 5000,
    refetchOnWindowFocus: true,
  });

  return {
    blogs: blogs || null,
    error,
    isLoading,
  };
} 