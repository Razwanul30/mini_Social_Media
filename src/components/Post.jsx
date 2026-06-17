import { useState } from "react";
import api from "../api/api";

function Post({ post, onDelete, onLike, onUpdate }) {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(post.comments || []);
  const [showComments, setShowComments] = useState(false);

  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(post.content);

  const addComment = async (e) => {
    e.preventDefault();

    if (!commentText.trim()) return;

    try {
      const token = localStorage.getItem("token");

      await api.post(
        `/posts/${post._id}/comment`,
        { text: commentText },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setComments([
        ...comments,
        {
          _id: Date.now(),
          text: commentText,
          user: { name: "You" },
        },
      ]);

      setCommentText("");
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const handleUpdate = async () => {
    if (!editText.trim()) return;

    await onUpdate(post._id, editText);
    setEditing(false);
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">

        <div className="d-flex align-items-center mb-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="rounded-circle me-2"
            width="40"
            height="40"
          />

          <div>
            <h6 className="mb-0 fw-bold">
              {post.author?.name}
            </h6>

            <small className="text-muted">
              🌍 Social Media User
            </small>
          </div>
        </div>

        {/* Content */}
        {editing ? (
          <>
            <textarea
              className="form-control mb-2"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />

            <button
              className="btn btn-success btn-sm me-2"
              onClick={handleUpdate}
            >
              Save
            </button>

            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <p className="mt-2 mb-2">
              {post.content}
            </p>

            <button
              className="btn btn-warning btn-sm mb-2"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
          </>
        )}

        <hr className="my-2" />

        <div className="d-flex justify-content-around text-muted mb-2">
          <button
            className="btn btn-sm btn-light w-100 me-1"
            onClick={() => onLike(post._id)}
          >
            ❤️ Like ({post.likes?.length || 0})
          </button>

          <button
            className="btn btn-sm btn-light w-100 mx-1"
            onClick={() => setShowComments(!showComments)}
          >
            💬 Comment ({comments.length})
          </button>

          <button
            className="btn btn-sm btn-light w-100 ms-1"
            onClick={() => onDelete(post._id)}
          >
            🗑 Delete
          </button>
        </div>

        {showComments && (
          <>
            <hr className="my-2" />

            <form
              onSubmit={addComment}
              className="d-flex align-items-center gap-2 mt-2"
            >
              <input
                className="form-control form-control-sm rounded-pill"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
              />

              <button
                type="submit"
                className="btn btn-sm btn-primary"
                disabled={!commentText.trim()}
              >
                Send
              </button>
            </form>

            <div className="mt-3">
              {comments.length === 0 ? (
                <p className="text-muted small">
                  No comments yet
                </p>
              ) : (
                comments.map((comment) => (
                  <div
                    key={comment._id}
                    className="mb-2 p-2 bg-light rounded"
                  >
                    <strong>{comment.user?.name}</strong>
                    <div>{comment.text}</div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Post;