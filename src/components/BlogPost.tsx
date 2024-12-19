import { useParams } from "react-router-dom";
import { useBlog } from "@/hooks";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import { Skeleton } from "./ui/skeleton";
import { JSONContent } from "novel";
import RenderBlogPost from "./RenderBlogPost";
import toast from "react-hot-toast";

const BlogPost = () => {
  const { id } = useParams();
  const blogId = Number(id);
  const { blogPost, error, isLoading } = useBlog(blogId);
  const date = blogPost?.createdAt
    ? new Date(blogPost.createdAt).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    : "";

  if (error) {
    toast.error(error.message)
    return (
      <>
        <div className="w-full flex justify-center items-center text-center">
          <h1 className="font-semibold md:text-4xl py-10  text-xl text-center">
            {error.message}
          </h1>
        </div>
      </>
    );
  }
  return (
    <>
      <section className="max-w-7xl mx-auto my-20 px-5">
        {
          isLoading ?
            <div className="grid grid-cols-1  gap-10">
              <div>
                <div className="flex justify-center flex-col items-center gap-4 mb-10">
                  <Skeleton className="h-8 w-full  mb-5" />
                  <Skeleton className="h-4 w-[250px]" />
                </div>
                <div className="space-y-4">
                  <Skeleton className="h-[500px] md:w-full w-full" />
                </div>
              </div>
            </div>
            :
            <div className="flex justify-center items-start gap-20 flex-col">
              {/* Blog Content */}
              <div className="w-full">
                <div className="flex justify-center items-center flex-col">
                  <h1 className="md:text-4xl text-xl text-center md:text-left font-bold md:leading-snug mb-5">{blogPost.title}</h1>
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-center items-center gap-2">
                      <Avatar>
                        <AvatarFallback>{blogPost.author?.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <h1 className="text-base capitalize font-medium">{blogPost.author?.name}</h1>
                    </div>
                    <span className="opacity-55">{"-"}</span>
                    <p className=" text-sm text-center opacity-50 ">{date}</p>
                  </div>
                </div>
                {/* render article */}
                <RenderBlogPost json={blogPost.content as JSONContent} />
              </div>
            </div>
        }
      </section >
    </>
  );
};

export default BlogPost;
