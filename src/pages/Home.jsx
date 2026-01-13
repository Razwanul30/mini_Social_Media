import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";

function Home({ user }) {
  const [posts, setPosts] = useState([]);

  // 🔹 Fetch posts from Dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then(res => res.json())
      .then(data => {
        const formattedPosts = data.posts.map(post => ({
          id: post.id,
          title: post.title,
          content: post.body,
          tags: post.tags,
          likes: post.reactions,
          authorId: post.userId,
          authorName: `User ${post.userId}`,
          comments: []
        }));

        setPosts(formattedPosts);
      });
  }, []);

  // 🔹 Delete post logic
  const deletePost = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <div className="container mt-4">
      <CreatePost posts={posts} setPosts={setPosts} author={user} />
      <PostList posts={posts} onDelete={deletePost} />
    </div>
  );
}

export default Home;
