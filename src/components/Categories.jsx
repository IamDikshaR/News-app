import React, { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import News from "./News";

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
    "general",
    "business",
    "technology",
    "sports",
    "entertainment",
    "health",
    "science",
  ];
  const display = [
    "General",
    "Business",
    "Technology",
    "Sports",
    "Entertainment",
    "Health",
    "Science",
  ];

  useEffect(() => {
    <News category={category} />;
  }, [category]);

  const defaultFocusRef = useRef(null);
  useEffect(() => {
    if (defaultFocusRef.current) {
      defaultFocusRef.current.focus();
    }
  }, []);
  return (
    <>
      <div className="flex flex-nowrap my-4 mx-2 justify-around">
        {categories.map((category, index) => (
          <button
            key={index}
            ref={index === 0 ? defaultFocusRef : null}
            className={`py-2 text-xl hover:text-color-2 hover:underline hover:underline-offset-[15px] focus:text-color-2 focus:bg-color-2/[0.15] focus:w-1/6  focus:border-b-2 focus:border-color-2 focus:outline-none`}
            onClick={() => setCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <News category={category} />
    </>
  );
};

export default Categories;
