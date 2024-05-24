import React from "react";
import { useState, useEffect } from "react";

const ChannelSearch = () => {
  const [query, setQuery] = useState("");
  const SOURCE_URL = "https://newsapi.org/v2/top-headlines/sources";
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY_SOURCE;
  useEffect(() => {
    //code to search
  }, [query]);
  return (
    <>
      <div className="flex justify-center">
        <div className="px-4 gap-4 flex items-center justify-start border-color-3 border-2 rounded-lg bg-color-3/[0.1] m-4 min-h-10">
          <i className="material-icons text-color-3">search</i>
          <input
            className=" bg-color-3/[0.05] min-w-80"
            value={query}
            placeholder="Search Channel"
            onChange={(e) => setQuery(e.target.value)}
            type="text"
          />
        </div>
      </div>
    </>
  );
};

export default ChannelSearch;
