import { ENV } from "@/config/conf";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import toast from "react-hot-toast";
import Editor from "./EditorWrapper";
import { JSONContent } from "novel";
import { Label } from "./ui/label";

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState<JSONContent | undefined>();
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
        <div className="flex justify-center items-start flex-col gap-3 w-full">
          <Label className="text-xl">
            Blog post title
          </Label>
          <Input
            required
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter your blog post title"
          />
        </div>
        <div className="w-full">
          {/* editor */}
          <div className="space-y-2">
            <Label className="text-xl">
              Blog post content
            </Label>
            <Editor onChange={setContent} initalValue={content} />
          </div>
        </div>
        <Button
          disabled={loading}
          onClick={handleEditBlog}
          className="w-full my-5">
          {loading && <Loader2 className="animate-spin" />}
          Publish Blog
        </Button>
      </div>
    </section>
  )
}

export default EditBlog