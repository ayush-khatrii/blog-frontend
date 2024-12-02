import { useParams } from "react-router-dom";
import { useBlog } from "@/hooks";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"

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
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading.......</div>;
  }

  return (
    <>
      <section className="max-w-7xl mx-auto mt-32 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10">
          {/* Blog Content */}
          <div>
            <h1 className="md:text-5xl text-2xl font-bold mb-6">{blogPost.title}</h1>
            <p className=" text-sm mb-6 opacity-50 ">Posted on: {date}</p>
            <article className="text-lg dark:text-zinc-300 leading-relaxed ">
              {blogPost.content}
            </article>
          </div>

          {/* Author Sidebar */}
          <aside className="flex flex-col items-start gap-4 md:pl-5">
            <div className="flex flex-col items-start">
              <p className="opacity-50 text-sm mb-4 uppercase">Author</p>

              <div className="flex justify-center items-center gap-2">
                <Avatar>
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <h1 className="text-xl capitalize font-semibold">{blogPost.author.name}</h1>
              </div>
            </div>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              rerum.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
