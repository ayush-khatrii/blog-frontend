import { BLOG_POSTS } from "@/types"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Link } from "react-router-dom";
import { Card } from "./ui/card";


const BlogCard = ({ title, author, content, createdAt, id }: BLOG_POSTS) => {

  const date = new Date(createdAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  const previewContent = content.slice(0, 100) + "..."
  return (
    <>
      <div className="w-full">
        <Card className="flex max-w-2xl gap-3 px-3 py-4 flex-col">
          <div className="flex gap-2 mt-4 justify-start items-center">
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
              <Link to={`/blog/${id}`}>
                <h1 className="lg:text-2xl text-base font-bold cursor-pointer">
                  {title ? title : "**TITLE NOT PROVIDED**"}
                </h1>
                <p className="text-base my-2 font-light">
                  {/* {content} */}

                  <div
                    className="prose dark:prose-dark max-w-full break-words overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: previewContent }}
                  />
                </p>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default BlogCard