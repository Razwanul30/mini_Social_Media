function PostList({ posts }) {
  return (
    <div>
      {posts.length === 0 && <p>No posts yet</p>}

      {posts.map((post) => (
        <div key={post.id}>
          <strong>{post.author}</strong>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PostList;
