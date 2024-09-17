// src/apiService.js
import axios from 'axios';

const YOUTUBE_API_KEY = 'YOUR_YOUTUBE_API_KEY';
const TWITTER_BEARER_TOKEN = 'YOUR_TWITTER_BEARER_TOKEN';
const NEWS_API_KEY = 'YOUR_NEWS_API_KEY';

export const fetchYouTubeFeed = async (query) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 4,
        q: query,
        key: YOUTUBE_API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching YouTube data:', error);
    return [];
  }
};

export const fetchTwitterFeed = async (query) => {
  try {
    const response = await axios.get('https://api.twitter.com/2/tweets/search/recent', {
      params: {
        query: query,
        max_results: 3,
      },
      headers: {
        Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching Twitter data:', error);
    return [];
  }
};

export const fetchGoogleNewsFeed = async (query) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: query,
        apiKey: NEWS_API_KEY,
        pageSize: 4,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching Google News data:', error);
    return [];
  }
};
