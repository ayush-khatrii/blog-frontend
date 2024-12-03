import { useBlogs } from "@/hooks";
import BlogCard from "./BlogCard"
import { Skeleton } from "./ui/skeleton";

const Blog = () => {
  const { blogs, error, isLoading } = useBlogs();
  if (error) {
    return <div>
      {error.message}
    </div>
  }
  return (
    <>
      <section className="flex justify-evenly items-center flex-col mb-28">
        <div className="w-full py-20 dark:bg-black bg-zinc-100 mb-10">
          <h1 className="font-semibold md:text-4xl py-10  text-xl text-center">
            Explore Inspiring Blogs
          </h1>
        </div>
        <div className="max-w-3xl mx-auto">
          {
            isLoading ?
              <div className="flex gap-36 justify-start items-start px-3 py-2 flex-col">
                <div>
                  <div className="flex mb-4 justify-start items-center gap-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="h-4 w-[250px]" />
                  </div>
                  <div className="space-y-4">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[600px]" />
                  </div>
                </div>
                <div>
                  <div className="flex mb-4 justify-start items-center gap-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="h-4 w-[250px]" />
                  </div>
                  <div className="space-y-4">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[600px]" />
                  </div>
                </div>
                <div>
                  <div className="flex mb-4 justify-start items-center gap-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="h-4 w-[250px]" />
                  </div>
                  <div className="space-y-4">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[600px]" />
                  </div>
                </div>
              </div>
              :
              <div>
                {blogs?.map((blog, idx) => (
                  <div key={idx}>
                    <BlogCard
                      id={blog.id}
                      author={blog?.author}
                      title={blog.title}
                      content={blog.content}
                      createdAt={blog.createdAt}
                    />
                  </div>
                ))}
              </div>
          }
        </div>
      </section>
    </>
  )
}

export default Blog;

