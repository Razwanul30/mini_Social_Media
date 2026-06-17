import { useState , useRef } from "react";
import api from "../api/api";

function CreatePost({ posts, setPosts, author }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!text.trim()) return;

  try {
    const token = localStorage.getItem("token");

    const res = await api.post(
      "/posts",
      {
        content: text,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setPosts((prev) => [res.data, ...prev]);

    setText("");
    inputRef.current.focus();
  } catch (error) {
    console.log(error.response?.data);
  }
};

return (
  <div className="card mb-3">
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <input
          // type="text"
          ref={inputRef}
          className="form-control mb-2"
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          // autoFocus
        />

        <div className="text-end">
          <button type="submit" className="btn btn-primary btn-sm">
            Post
          </button>
        </div>
      </form>
    </div>
  </div>
);

}

export default CreatePost;
