import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import Editor from "../Editor";
import { toast } from "react-toastify";

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setSummary(postInfo.summary);
        setContent(postInfo.content);
      });
    });
  }, []);

  async function updatePost(e) {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    await fetch("http://localhost:4000/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    setRedirect(true);
    toast.success("post updated");
  }

  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }

  return (
    <form onSubmit={updatePost}>
      <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="summary"
        placeholder={"Summary"}
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input
        type="file"
        // value={files}
        onChange={(e) => {
          setFiles(e.target.files);
        }}
      />
      <Editor onChange={setContent} value={content} />
      <button style={{ marginTop: "5px" }}>Update post</button>
    </form>
  );
}
