import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import NewsModal from "./NewsModal";
import "./News.css";

const API_KEY = "AIzaSyD8vWCcxdfyKbDkSHN-KV1ROKROZt28RXk";
const BLOG_ID = "5612014853110497757";

const stripHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

// Function to extract first image from content
const extractFirstImage = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const imgTag = doc.querySelector("img");
  return imgTag ? imgTag.src : null;
};

const News = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`)
      .then((response) => {
        const updatedPosts = response.data.items.map((post) => ({
          ...post,
          imageUrl: extractFirstImage(post.content),
        }));
        setPosts(updatedPosts);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <Header />
      <div className="news-container p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="news-card bg-white p-4 shadow-lg rounded-lg cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Display Image if Available */}
              {post.imageUrl ? (
                <img src={post.imageUrl} alt="News" className="w-full h-48 object-cover rounded-md mb-4" />
              ) : (
                <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                  No Image Available
                </div>
              )}
              
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700">{stripHtml(post.content).substring(0, 150)}...</p>
              <div className="text-sm text-gray-500 mt-2">Published: {new Date(post.published).toDateString()}</div>
            </div>
          ))}
        </div>
      </div>
      {selectedPost && <NewsModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
      <Footer />
    </div>
  );
};

export default News;
