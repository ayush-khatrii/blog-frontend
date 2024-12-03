import { BLOG_POSTS } from "@/types"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Link } from "react-router-dom";


const BlogCard = ({ title, author, content, createdAt, id }: BLOG_POSTS) => {

  const date = new Date(createdAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  const previewContent = content.slice(0, 100) + "..."
  return (
    <div className="w-full rounded cursor-pointer">
      <Link to={`/blog/${id}`}>
        <div className="flex gap-3 px-3 py-2 flex-col">
          <div className="flex gap-2 justify-start items-center">
            <Avatar>
              <AvatarFallback>ak</AvatarFallback>
            </Avatar>
            <h1 className="text-base my-3">{author?.name}</h1>

            <div className="w-1 h-1 bg-foreground rounded-full opacity-70">
            </div>
            <span className="lg:text-sm text-base">
              {date}
            </span>
          </div>
          <div className="flex pl-2 justify-between">
            <div className="w-auto flex justify-center items-start gap-3 flex-col">
              <h1 className="lg:text-2xl text-base font-bold">
                {title}
              </h1>
              <p className="text-base font-light">
                {/* {content} */}

                <div
                  className="prose dark:prose-dark max-w-full break-words overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: previewContent }}
                />
              </p>
            </div>
          </div>
          <div className="text-sm pl-2 my-5 dark:text-zinc-400 ">2 minutes read</div>
          <hr />
        </div>
      </Link>
    </div>
  )
}

export default BlogCard