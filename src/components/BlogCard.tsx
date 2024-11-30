import { Avatar, AvatarFallback } from "./ui/avatar"

const BlogCard = () => {
  const some = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores unde necessitatibus facilis architecto, libero praesentium adipisci maxime labore, velit commodi at nostrum, quibusdam assumenda? Harum quidem eligendi maxime eaque excepturi alias nobis corporis, ex dolores soluta hic suscipit autem delectus eos sequi laborum ratione! Repudiandae nostrum deserunt accusantium cum reiciendis facere explicabo modi ullam? Cumque molestias numquam quod possimus deleniti hic ex blanditiis eum. Quam numquam sequi cum, aspernatur itaque reprehenderit! Iusto sequi ipsa adipisci, dolorum nemo totam aliquam aspernatur voluptas minus ad cumque officiis inventore quasi autem sint iure architecto magnam saepe temporibus! Accusantium saepe ea reiciendis? Tempore, odio.`
  return (
    <div className="w-full max-w-4xl mx-auto rounded cursor-pointer">
      <div className="flex flex-wrap gap-3 px-3 py-2 flex-col">
        <div className="flex gap-2 justify-start items-center">
          <Avatar>
            <AvatarFallback>ak</AvatarFallback>
          </Avatar>
          <h1 className="text-lg my-3">Ayush Khatri</h1>

          <div className="w-1 h-1 bg-foreground rounded-full opacity-70">
          </div>
          <span>
            {`1-12-2024`}
          </span>
        </div>
        <div className="flex pl-2 justify-between">
          <div className="w-auto">
            <h1 className="text-2xl font-semibold">This is title</h1>
            <p className="text-base font-extralight">
              {some.slice(0, 200) + "..."}
            </p>
          </div>
        </div>
        <div className="text-sm pl-2 dark:text-zinc-400 ">2 minutes read</div>
        <hr />
      </div>
    </div>
  )
}

export default BlogCard