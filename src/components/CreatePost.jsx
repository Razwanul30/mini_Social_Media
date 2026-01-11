import { useState } from "react";

function CreatePost({ posts, setPosts, author }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    const newPost = {
      id: Date.now(),
      author: author.name,
      content: text,
    };

    setPosts([newPost, ...posts]);
    setText("");
  };

return (
  <div className="card mb-3">
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
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
