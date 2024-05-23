import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const News = ({ category }) => {
  const NEWS_URL = "https://newsapi.org/v2/everything?q=everything";
  const SOURCE_URL = "https://newsapi.org/v2/top-headlines/sources";
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [sources, setSources] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [newsResponse, sourcesResponse] = await Promise.all([
          fetch(`${NEWS_URL}&apiKey=${API_KEY}`),
          fetch(`${SOURCE_URL}?apiKey=${API_KEY}`),
        ]);

        const newsResults = await newsResponse.json();
        const sourcesResults = await sourcesResponse.json();

        setArticles(newsResults.articles || []);
        setSources(sourcesResults.sources || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [API_KEY]);

  const categorizedArticles = articles.filter((article) => {
    const source = sources.find((src) => src.id === article.source.id);
    return source && source.category === category;
  });

  if (loading) {
    return <div className="flex justify-center">Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {categorizedArticles.length > 0 ? (
        categorizedArticles.map((article, index) => (
          //   <div key={index} className="my-4">
          //     <a
          //       href={article.url}
          //       target="_blank"
          //       //   rel="noopener noreferrer"
          //       className="text-blue-500"
          //     >
          //       <h2 className="text-xl font-semibold">{article.title}</h2>
          //     </a>
          //     <p>{article.description}</p>
          //   </div>
          <NewsCard article={article} />
        ))
      ) : (
        <div className="flex justify-center">
          No articles found for this category.
        </div>
      )}
    </div>
  );
};

export default News;
