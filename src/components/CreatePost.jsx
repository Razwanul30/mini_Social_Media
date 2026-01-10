import { useState } from "react";

function CreatePost({ posts, setPosts }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    const newPost = {
      id: Date.now(),
      author: "You",
      content: text,
    };

    setPosts([newPost, ...posts]);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default CreatePost;
