import { useEffect, useState } from "react";
import "./News.css"; // Import CSS file

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbwvYbEV7PYzXrkEF7I0A3GqEM5mQ612AtLDyhpYERes9_pNd0Rh82BZIiUr4UT-ZeQLqg/exec") // Replace with actual API
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="news-container">
      <h1>Latest News</h1>
      <div className="news-list">
        {news.length > 0 ? (
          news.map((item) => (
            <div key={item.id} className="news-item">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <small>{new Date(item.date).toLocaleDateString()}</small>
            </div>
          ))
        ) : (
          <p className="no-news">No news available.</p>
        )}
      </div>
    </div>
  );
};

export default News;
