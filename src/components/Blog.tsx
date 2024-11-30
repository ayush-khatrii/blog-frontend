import BlogCard from "./BlogCard"
import Navbar from "./Navbar";

const Blog = () => {
  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center mt-28">
        <div className="flex justify-center items-center gap-3 flex-col">
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog;

