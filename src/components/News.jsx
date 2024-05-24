import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const News = ({ category }) => {
  const [data, setData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(21);
  const [loading, setLoading] = useState(true);

  const NEWS_URL = "https://newsapi.org/v2/everything";
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY_SOURCE;
  useEffect(() => {
    async function fetchChannel() {
      const response = await fetch(
        `${NEWS_URL}?q=${category}&apiKey=${API_KEY}`
      );
      const results = await response.json();
      setData(results.articles);
      setLoading(false);
    }
    fetchChannel();
  }, [category]);

  const handleLoadMore = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 15);
  };

  if (loading) {
    return <div className="flex justify-center">Loading...</div>;
  }
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2">
        {data.slice(0, itemsToShow).map((article, index) => (
          // article.title != [Removed] ? <NewsCard article={article} /> : ""
          <NewsCard article={article} key={index} />
        ))}
      </div>
      {itemsToShow < data.length && (
        <div className="flex justify-center mt-4">
          <button
            className="mb-4 bg-color-1 text-white rounded px-4 py-2 hover:shadow-md hover:px-5 hover:py-3 hover:text-lg hover:shadow-slate-400"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default News;
