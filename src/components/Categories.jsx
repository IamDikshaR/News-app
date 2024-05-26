import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import News from "./News";

const Categories = () => {
  const [category, setCategory] = useState(["headlines", "General"]);
  const [show, setShow] = useState(false);
  const categories = [
    "headlines",
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

  const defaultFocusRef = useRef(null);
  useEffect(() => {
    if (defaultFocusRef.current) {
      defaultFocusRef.current.focus();
    }
  }, []);
  return (
    <>
      {/* <div className="sm:hidden flex justify-end mx-2"></div> */}
      <div className="sm:hidden flex bg-color-2/[0.15] mb-2 items-center justify-end gap-4">
        <h3 className="sm:hidden text-lg text-color-2">{category[1]}</h3>
        <i
          className="material-icons text-4xl text-color-2"
          onClick={() => setShow((prevShow) => !prevShow)}
        >
          {!show ? (
            <span class="material-symbols-outlined">arrow_drop_down</span>
          ) : (
            <span class="material-symbols-outlined">arrow_drop_up</span>
          )}
        </i>
      </div>
      <div>
        {show && (
          <div className="flex flex-col items-center gap-2">
            {display.map((category, index) => (
              <button
                key={index}
                ref={index === 0 ? defaultFocusRef : null}
                className={`py-2 text-xl hover:text-color-2 hover:underline hover:underline-offset-[15px] focus:text-color-2 focus:bg-color-2/[0.15] focus:w-1/6  focus:border-b-2 focus:border-color-2 focus:outline-none`}
                onClick={() => {
                  setCategory([categories[index], display[index]]);
                  setShow((prevShow) => !prevShow);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="hidden sm:flex sm:flex-nowrap sm:my-4 sm:mx-2 sm:justify-around">
        {display.map((category, index) => (
          <button
            key={index}
            ref={index === 0 ? defaultFocusRef : null}
            className={`py-2 text-xl hover:text-color-2 hover:underline hover:underline-offset-[15px] focus:text-color-2 focus:bg-color-2/[0.15] focus:w-1/6  focus:border-b-2 focus:border-color-2 focus:outline-none`}
            onClick={() => setCategory([categories[index], display[index]])}
          >
            {category}
          </button>
        ))}
      </div>
      <News category={category[0]} />
    </>
  );
};

export default Categories;
