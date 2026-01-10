import { useState } from "react";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";

function Home({ user }) {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <h2>Welcome, {user.name}</h2>

      <CreatePost posts={posts} setPosts={setPosts} />
      <PostList posts={posts} />
    </div>
  );
}

export default Home;
