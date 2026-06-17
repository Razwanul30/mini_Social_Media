import Post from "./Post";

function PostList({
  posts,
  onDelete,
  onLike,
  onUpdate,
}) {
  if (posts.length === 0) {
    return (
      <p className="text-center text-muted">
        No posts yet. Be the first to post!
      </p>
    );
  }

  return (
    <div className="mt-3">
      {posts.map((post) => (
        <Post
          key={post._id}
          post={post}
          onDelete={onDelete}
          onLike={onLike}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default PostList;