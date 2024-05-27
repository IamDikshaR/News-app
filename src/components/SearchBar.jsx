import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(true);

  const NEWS_URL = "https://newsapi.org/v2/everything";
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY_SOURCE;
  {
    search &&
      useEffect(() => {
        async function fetchChannel() {
          const response = await fetch(
            `${NEWS_URL}?q=${query}&apiKey=${API_KEY}`
          );
          const results = await response.json();
          setData(results.articles);
          setLoading(false);
        }
        fetchChannel();
      }, [query]);
  }

  //   {
  //     search && loading;
  //     return <div className="flex justify-center">Loading...</div>;
  //   }

  return (
    <>
      <div className="flex justify-center">
        <button
          className="px-4 gap-4 flex items-center justify-start border-color-2 border-2 rounded-lg bg-color-2/[0.1] m-4 min-h-10"
          onClick={() => setSearch(true)}
        >
          <i className="material-icons text-color-2">search</i>
          <input
            className=" bg-color-2/[0.05] min-w-80 sm:min-w-96"
            value={query}
            placeholder="Search Articles"
            onChange={(e) => setQuery(e.target.value)}
            type="text"
          />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
