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
    <div className="card mb-3">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-primary fw-bold">
          {post.author}
        </h6>

        <p className="card-text">{post.content}</p>

        <div className="d-flex gap-2 mb-3">
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => setLiked(!liked)}
          >
            <span className={liked ? "text-danger" : "text-muted"}>
              {liked ? "❤️" : "🤍"}
            </span>{" "}
            Like
          </button>

          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => onDelete(post.id)}
          >
            🗑️ Delete
          </button>
        </div>

        {/* Comment Input */}
        <form onSubmit={addComment} className="d-flex gap-2">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button className="btn btn-sm btn-primary" type="submit">
            Comment
          </button>
        </form>

        {/* Comments */}
        {comments.length > 0 && (
          <div className="mt-3">
            {comments.map((c, i) => (
              <p key={i} className="mb-1">
                💬 {c}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );

}

export default Post;
