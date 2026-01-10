import Post from "./Post";

function PostList({ posts, onDelete }) {
  if (posts.length === 0) {
    return <p>No posts yet</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default PostList;
