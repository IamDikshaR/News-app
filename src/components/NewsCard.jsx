import React from "react";
import { useState, useEffect } from "react";

const NewsCard = () => {
  const NEWS_URL = "https://newsapi.org/v2/everything?q=everything";
  const SOURCE_URL = "https://newsapi.org/v2/top-headlines/sources";
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const [sources, setSources] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSources = async () => {
      try {
        const response = await fetch(`${SOURCE_URL}?apiKey=${API_KEY}`);
        const result = await response.json();
        setSources(result.sources);
      } catch (error) {
        console.error("Error fetching sources:", error);
      }
    };

    const fetchArticles = async () => {
      try {
        const response = await fetch(`${NEWS_URL}&apiKey=${API_KEY}`);
        const result = await response.json();
        setArticles(result.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await fetchSources();
      await fetchArticles();
      setLoading(false);
    };

    fetchData();
  }, []);

  const getCategoryBySourceId = (sourceId) => {
    const source = sources.find((src) => src.id === sourceId);
    return source ? source.category : "unknown";
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        {articles.map((article, index) => {
          const category = getCategoryBySourceId(article.source.id);
          return (
            <div key={index} className="article">
              <h2>{article.title}</h2>
              <p>Category: {category}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsCard;
