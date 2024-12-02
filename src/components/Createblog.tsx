import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { ArrowLeft } from "lucide-react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";

const Createblog = () => {
  const [value, setValue] = useState('');

  return (
    <section className="max-w-7xl mx-auto mt-36 px-5">
      <h1 className="my-3 text-xl">Start writing blogs</h1>
      {/* text editor */}
      <div>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </section>
  )
}

export default Createblog