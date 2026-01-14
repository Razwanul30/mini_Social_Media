import { useState } from "react";

function Post({ post, onDelete, onLike }) {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(post.comments || []);
  const [showComments, setShowComments] = useState(false);

  //console.log(typeof post.likes);

  const addComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setComments(prev => [...prev, commentText]);
    setCommentText("");
  };

return (
  <div className="card mb-3 shadow-sm">
    <div className="card-body">
      {/* Header */}
      <div className="d-flex align-items-center mb-2">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="rounded-circle me-2"
          width="40"
          height="40"
        />
        <div>
          <h6 className="mb-0 fw-bold">{post.authorName}</h6>
          <small className="text-muted">Just now · 🌍</small>
        </div>
      </div>

      {/* Content */}
      <p className="mt-2 mb-2">{post.content}</p>

      {/* Tags */}
      <div className="mb-2">
        {post.tags.map((tag) => (
          <span key={tag} className="text-primary me-2">
            #{tag}
          </span>
        ))}
      </div>

      <hr className="my-2" />

      {/* Action Bar */}
      <div className="d-flex justify-content-around text-muted mb-2">
        <button
          className="btn btn-sm btn-light w-100 me-1"
          onClick={() => onLike(post.id)}
        >
          {post.liked ? "❤️" : "🤍"} Like ({post.likes})
        </button>

        <button
          className="btn btn-sm btn-light w-100 mx-1"
          onClick={() => setShowComments(!showComments)}
        >
          💬 Comment ({comments.length})
        </button>

        <button
          className="btn btn-sm btn-light w-100 ms-1"
          onClick={() => onDelete(post.id)}
        >
          🗑 Delete
        </button>
      </div>
      {showComments && (
        <>
          <hr className="my-2" />
          {/* Comment Input */}
          <form
            onSubmit={addComment}
            className="d-flex align-items-center gap-2 mt-2"
          >
            <img
              src="https://i.pravatar.cc/32"
              alt="me"
              className="rounded-circle"
              width="32"
              height="32"
            />
            <input
              className="form-control form-control-sm rounded-pill"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
            />

            <button
              type="submit"
              className="btn btn-sm btn-primary rounded-pill px-3"
              disabled={!commentText.trim()}
            >
              Send
            </button>
          </form>

          {/* Comments */}
          <div className="mt-2">
            {comments.map((c, i) => (
              <div key={i} className="small text-muted ms-5">
                💬 {c}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  </div>
);

}

export default Post;
