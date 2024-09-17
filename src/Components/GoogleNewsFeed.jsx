// src/components/GoogleNewsFeed.js
import React, { useEffect, useState } from 'react';
import { fetchGoogleNewsFeed } from '../apiService';
import './GoogleNewsFeed.css'; // Create this CSS file for styling

const GoogleNewsFeed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      const articleData = await fetchGoogleNewsFeed('technology');
      setArticles(articleData);
    };

    loadArticles();
  }, []);

  return (
    <div className="google-news-feed">
      <h2>Google News Feed</h2>
      <div className="cards">
        {articles.map((article, index) => (
          <div className="card" key={index}>
            <img src={article.urlToImage} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleNewsFeed;
