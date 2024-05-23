import React, { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Categories = () => {
  // const [data, setData] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const URL = "https://newsapi.org/v2/top-headlines/sources";
  // const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   async function fetchChannel() {
  //     const response = await fetch(`${URL}?apiKey=${API_KEY}`);
  //     const results = await response.json();
  //     setData(results.sources);
  //     setLoading(false);
  //   }
  //   fetchChannel();
  // }, []);
  // useEffect(() => {
  //   const category = data.map((source) => source.category);
  //   setCategories([...new Set(category)]);
  // }, [!loading]);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // return (
  //   <>
  //     <div className="flex flex-nowrap gap-1 mx-2 ">
  //       {categories.map((category) => (
  //         <button key={category}> {category}</button>
  //       ))}
  //     </div>
  //   </>
  // );
  const [click, setClick] = useState(false);
  const [category, setCategory] = useState("general");
  const categories = [
    "General",
    "Business",
    "Technology",
    "Sports",
    "Entertainment",
    "Health",
    "Science",
  ];

  const handleClick = () => {
    setClick(true);
    //store and send of category news
  };
  return (
    <>
      <div className="flex flex-nowrap gap-1 my-4 mx-2 justify-around">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`text-xl hover:text-color-2 hover:underline hover:underline-offset-8 ${
              click ? "bg-color-2/[0.2]" : ""
            }`}
            onClick={handleClick}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default Categories;
