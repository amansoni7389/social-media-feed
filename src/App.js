// src/App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import YouTubeFeed from './Components/YoutubeFeed';
import TwitterFeed from './Components/TwitterFeed';
import GoogleNewsFeed from './Components/GoogleNewsFeed';
import './App.css'; // Create this CSS file for global styling

const App = () => {
  return (
    <div className="App">
      <HeroSection />
      <YouTubeFeed />
      <TwitterFeed />
      <GoogleNewsFeed />
    </div>
  );
};

export default App;
