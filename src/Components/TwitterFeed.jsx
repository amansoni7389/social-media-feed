// src/components/TwitterFeed.js
import React, { useEffect, useState } from 'react';
import { fetchTwitterFeed } from '../apiService';
import './TwitterFeed.css'; // Create this CSS file for styling

const TwitterFeed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const loadTweets = async () => {
      const tweetData = await fetchTwitterFeed('technology');
      setTweets(tweetData);
    };

    loadTweets();
  }, []);

  return (
    <div className="twitter-feed">
      <h2>Twitter Feed</h2>
      <div className="sections">
        {tweets.map((tweet) => (
          <div className="section" key={tweet.id}>
            <p>{tweet.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwitterFeed;
