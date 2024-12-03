import { ENV } from "@/config/conf";
import { BLOG_POSTS } from "@/types";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import BlogCard from "./BlogCard";
import { Button } from "./ui/button";
import { Edit2, EllipsisVertical, Trash2 } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

const Dashboard = () => {
  const [posts, setPosts] = useState<BLOG_POSTS[]>();
  const [loading, setLoading] = useState(false);

  const { apiUrl } = ENV;

  const getBlogPosts = async () => {
    try {
      setLoading(true);
      const resp = await fetch(`${apiUrl}/user/profile`, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("auth-token") || "",
        },
      });

      if (!resp.ok) {
        throw new Error("Failed to fetch profile data");
      }

      const data = await resp.json();
      console.log(data.userPosts);

      setPosts(data.userPosts);
    } catch (error: any) {
      toast.error(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  // @ts-ignore
  if (posts?.length < 1) {
    return <div className="flex text-xl justify-center items-center h-screen">
      No blog posts found!
    </div>
  }

  return (
    <section className="max-w-7xl mx-auto px-3 my-14 overflow-hidden">
      <div>
        <h1 className="md:text-2xl text-xl md:text-left text-center py-10 pl-5 font-semibold ">
          Your all blog posts
        </h1>
      </div>
      <div className="">
        {
          loading ? <div className="flex gap-36 justify-start items-start py-2 flex-col">
            <div>
              <div className="flex mb-4 justify-start items-center gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-4 w-[250px]" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 md:w-[600px] w-[300px]" />
              </div>
            </div>
            <div>
              <div className="flex mb-4 justify-start items-center gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-4 w-[250px]" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 md:w-[600px] w-[300px]" />
              </div>
            </div>
            <div>
              <div className="flex mb-4 justify-start items-center gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-4 w-[250px]" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 md:w-[600px] w-[300px]" />
              </div>
            </div>
          </div> :
            <>
              {posts?.map((item, idx) => (
                <div className="flex">
                  <BlogCard
                    key={idx}
                    id={item.id}
                    title={item.title}
                    content={item.content}
                    createdAt={item.createdAt}
                  />
                  <div className="absolute right-4 md:right-48">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button size="icon" variant="ghost" className="rounded-full">
                          <EllipsisVertical />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem className="cursor-pointer">
                          <Edit2 />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-red-500">
                          <Trash2 />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>


                  </div>
                </div>
              ))}
            </>
        }
        <div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard