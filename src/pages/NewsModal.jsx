import React, { useEffect } from "react";
import "./News.css";

const NewsModal = ({ post, onClose }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("modal-overlay")) {
        onClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [onClose]);

  return (
    <div className="modal-overlay flex justify-center items-center fixed inset-0 bg-black bg-opacity-50">
      <div className="modal-content bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full relative">
        <button className="close-btn absolute top-4 right-4 text-gray-600 text-2xl" onClick={onClose}>✖</button>
        
        {/* Show Image if Available */}
        {post.images && post.images.length > 0 && (
          <img src={post.images[0].url} alt="News" className="w-full h-64 object-cover rounded-lg mb-4" />
        )}

        <h2 className="modal-title text-3xl font-bold mb-2">{post.title}</h2>
        <p className="modal-date text-gray-500 mb-4">Published: {new Date(post.published).toDateString()}</p>
        <div className="modal-body text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </div>
  );
};

export default NewsModal;
