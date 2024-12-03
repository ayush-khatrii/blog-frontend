import { Button } from "./ui/button"
import { useState } from "react";
import { ENV } from "@/config/conf";
import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill CSS
import { useNavigate } from "react-router-dom";

const Createblog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('# Hello Editor');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { apiUrl } = ENV;
  const handlePublishBlog = async () => {
    try {
      setLoading(true);
      const resp = await fetch(`${apiUrl}/blog`, {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("auth-token") || ""
        },
        body: JSON.stringify({ title, content })
      });
      if (resp.ok) {
        toast.success('Blog published!');
        navigate("/blogs")
      }
    } catch (error) {
      toast.error("Error while publishing");
      console.error(error)
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="max-w-7xl mx-auto mt-36 px-5">
      {/* text editor */}
      <div className="flex w-full justify-center items-start flex-col gap-5">
        <Input
          required
          className="rounded-none"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter your blog title"
        />
        <div className="w-full">
          {/* editor */}
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Start writing your blog..."
          />
        </div>
        <Button
          disabled={loading}
          onClick={handlePublishBlog}
          className="w-full my-5">
          {loading && <Loader2 className="animate-spin" />}
          Publish Blog
        </Button>
      </div>
    </section>
  )
}

export default Createblog;