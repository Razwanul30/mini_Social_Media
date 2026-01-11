import { useState } from "react";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";

function Home({ user }) {
  const [posts, setPosts] = useState([]);

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h2 className="card-title">
                Welcome, <span className="text-primary">{user.name}</span>
              </h2>
            </div>
          </div>

          <CreatePost posts={posts} setPosts={setPosts} author={user} />

          <PostList posts={posts} onDelete={deletePost} />
        </div>
      </div>
    </div>
  );
}

export default Home;
