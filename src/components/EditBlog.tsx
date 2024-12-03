import { ENV } from "@/config/conf";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import toast from "react-hot-toast";

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('# Hello Editor');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { apiUrl } = ENV;

  const handleEditBlog = async () => {
    try {
      setLoading(true);
      const resp = await fetch(`${apiUrl}/blog/${id}`, {
        method: "PUT",
        headers: {
          Authorization: localStorage.getItem("auth-token") || ""
        },
        body: JSON.stringify({ title, content })
      });
      if (resp.ok) {
        toast.success('Blog Updated!');
        navigate("/blogs")
      }
    } catch (error) {
      toast.error("Error while updating blog");
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
            className="border-none"
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Start writing your blog..."
          />
        </div>
        <Button
          disabled={loading}
          onClick={handleEditBlog}
          className="w-full my-5">
          {loading && <Loader2 className="animate-spin" />}
          Update Blog
        </Button>
      </div>
    </section>
  )
}

export default EditBlog