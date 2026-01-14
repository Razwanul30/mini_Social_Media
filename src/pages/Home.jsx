import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";

function Home({ user,setUser }) {
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
          likes: post.reactions.likes,
          liked: false,
          authorId: post.userId,
          authorName: `User ${post.userId}`,
          comments: []
        }));

        setPosts(formattedPosts);
      });
  }, []);

  const likePost = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };


  // 🔹 Delete post logic
  const deletePost = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  }

 return (
   <div className="container mt-4">
     <div className="row justify-content-center">
       {/* welcome to home page */}
       <div className="row justify-content-center">
         <div className="col-12 col-md-10 col-lg-8">
           <div className="card shadow-sm">
             <div className="card-body">
               <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                 {/* Welcome text */}
                 <h2 className="card-title fw-bold mb-0 text-center text-md-start">
                   Welcome,
                   <span className="text-primary ms-2">{user.name}!</span>
                 </h2>

                 {/* Logout button */}
                 <button
                   className="btn btn-outline-danger btn-sm"
                   onClick={logout}
                 >
                   Logout
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>

       {/* Create Post Section */}
       <div className="col-12 col-md-10 col-lg-8 mb-4 mt-3">
         <div className="card shadow-sm">
           <div className="card-body">
             <CreatePost posts={posts} setPosts={setPosts} author={user} />
           </div>
         </div>
       </div>

       {/* Post List Section */}
       <div className="col-12 col-md-10 col-lg-8">
         <PostList posts={posts} onDelete={deletePost} onLike={likePost} />
       </div>
     </div>
   </div>
 );

}

export default Home;
