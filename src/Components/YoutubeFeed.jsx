// src/components/YouTubeFeed.js
import React, { useEffect, useState } from 'react';
import { fetchYouTubeFeed } from '../apiService';
import './YouTubeFeed.css'; // Create this CSS file for styling

const YouTubeFeed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const loadVideos = async () => {
      const videoData = await fetchYouTubeFeed('technology');
      setVideos(videoData);
    };

    loadVideos();
  }, []);

  return (
    <div className="youtube-feed">
      <h2>YouTube Feed</h2>
      <div className="cards">
        {videos.map((video) => (
          <div className="card" key={video.id.videoId}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <h3>{video.snippet.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeFeed;
