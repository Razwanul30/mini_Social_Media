import { useState } from "react";

function Post({ post, onDelete }) {
  const [liked, setLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = (e) => {
    e.preventDefault();
    if (commentText.trim() === "") return;

    setComments([...comments, commentText]);
    setCommentText("");
  };

  return (
    <div>
      <strong>{post.author}</strong>
      <p>{post.content}</p>

      <button onClick={() => setLiked(!liked)}>
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>

      <button onClick={() => onDelete(post.id)}>
        🗑️ Delete
      </button>

      {/* Comments */}
      <form onSubmit={addComment}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit">Comment</button>
      </form>

      {comments.map((c, i) => (
        <p key={i}>💬 {c}</p>
      ))}

      <hr />
    </div>
  );
}

export default Post;
