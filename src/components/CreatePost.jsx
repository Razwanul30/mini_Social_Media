import { useState , useRef } from "react";

function CreatePost({ posts, setPosts, author }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    const newPost = {
      id: Date.now(),
      tittle: "",
      content: text,
      tags: [],
      likes: 0,
      liked: false,
      authorid: author.id,
      authorName: author.name,
      contents: [],
    };

    setPosts([newPost, ...posts]);
    setText("");
    inputRef.current.focus();
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
