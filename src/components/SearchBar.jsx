import React, { useState, useEffect, useRef } from "react";
import NewsCard from "./NewsCard";
import SearchNews from "./SearchNews";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(8);

  const inputRef = useRef(null);

  const NEWS_URL = "https://newsapi.org/v2/everything";
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY_SOURCE;

  useEffect(() => {
    if (query) {
      async function fetchChannel() {
        setLoading(true);
        const response = await fetch(
          `${NEWS_URL}?q=${query || "headlines"}&apiKey=${API_KEY}`
        );
        const results = await response.json();
        setData(results.articles);
        setLoading(false);
      }
      fetchChannel();
    }
  }, [query]);

  useEffect(() => {
    if (search && inputRef.current) {
      inputRef.current.focus();
    }
  }, [search]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setQuery(inputRef.current.value);
    }
  };

  const handleLoadMore = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 20);
  };

  return (
    <div className={`relative ${search ? "z-10" : ""}`}>
      {!search && (
        <div className="flex justify-center">
          <button
            className="px-4 gap-4 flex items-center justify-start border-color-2 border-2 rounded-lg bg-color-2/[0.1] m-4 min-h-10"
            onClick={() => setSearch(true)}
          >
            <i className="material-icons text-color-2">search</i>
            <input
              className="bg-color-2/[0.05] min-w-80 sm:min-w-96"
              value={query}
              placeholder="Search Articles"
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              readOnly
            />
          </button>
        </div>
      )}
      {search && (
        <>
          <div className="fixed inset-0 bg-gray-800 bg-opacity-70 backdrop-blur-sm flex justify-center items-center">
            <div className="flex flex-col items-center">
              <button
                className="px-4 gap-4 flex items-center justify-start border-color-2 border-2 rounded-lg bg-color-2/[0.1] bg-white m-4 min-h-10"
                onClick={() => setSearch(true)}
              >
                <i className="material-icons text-color-2">search</i>
                <input
                  ref={inputRef}
                  className="bg-color-2/[0.05] min-w-80 sm:min-w-96 outline-none"
                  placeholder="Search Articles"
                  onKeyDown={handleSearch}
                  type="text"
                />
              </button>
              <div className="flex flex-wrap justify-center mt-4">
                {loading ? (
                  <p>Loading...</p>
                ) : data.length ? (
                  <>
                    <div className="m-4 flex flex-wrap backdrop-blur-md">
                      {data
                        .slice(0, itemsToShow)
                        .map((article, index) =>
                          article.title != "Removed" ? (
                            <SearchNews article={article} key={index} />
                          ) : (
                            ""
                          )
                        )}
                    </div>
                    <div className="flex justify-center mt-4">
                      <button
                        className="mb-4 bg-color-2 text-white rounded px-4 py-2 hover:shadow-md hover:px-5 hover:py-3 hover:text-lg hover:shadow-slate-400"
                        onClick={handleLoadMore}
                      >
                        Load More
                      </button>
                    </div>
                  </>
                ) : (
                  <p>No articles found</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBar;
