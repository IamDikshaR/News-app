import React, { useState, useEffect, useRef } from "react";

const ChannelButton = () => {
  const [data, setData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(50);
  const [loading, setLoading] = useState(true);
  const SOURCE_URL = "https://newsapi.org/v2/top-headlines/sources";
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY_SOURCE;

  useEffect(() => {
    async function fetchChannel() {
      const response = await fetch(`${SOURCE_URL}?apiKey=${API_KEY}`);
      const results = await response.json();
      setData(results.sources);
      setLoading(false);
    }
    fetchChannel();
  }, []);

  const handleLoadMore = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 20);
  };

  if (loading) {
    return <div className="flex justify-center">Loading...</div>;
  }

  return (
    <>
      <div className="flex m-2 gap-2 flex-wrap justify-center">
        {data.slice(0, itemsToShow).map((source) => (
          <a
            key={source.id}
            target="_blank"
            rel="noopener noreferrer"
            className="m-1 border-2 border-color-3 text-color-3 rounded px-4 py-2 hover:bg-color-3 hover:text-white"
            href={source.url}
          >
            {source.name}
          </a>
        ))}
      </div>
      {itemsToShow < data.length && (
        <div className="flex justify-center mt-4">
          <button
            className="mb-4 bg-color-3 text-white rounded px-4 py-2 hover:shadow-md hover:px-5 hover:py-3 hover:text-lg hover:shadow-slate-400"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default ChannelButton;
