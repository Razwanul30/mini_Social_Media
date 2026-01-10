import { useState } from "react";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";

function Home({ user }) {
  const [posts, setPosts] = useState([]);

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <h2>Welcome, {user.name}</h2>

      <CreatePost posts={posts} setPosts={setPosts} author={user} />
      <PostList posts={posts} onDelete={deletePost} />
    </div>
  );
}

export default Home;
