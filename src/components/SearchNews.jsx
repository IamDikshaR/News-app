import React from "react";

const SearchNews = ({ article }) => {
  //   const article = {
  //     source: {
  //       id: "wired",
  //       name: "Wired",
  //     },
  //     author: "Aarian Marshall",
  //     title: "Everything You Need to Know About Hybrid Cars",
  //     description:
  //       "What’s the difference between a hybrid, a mild hybrid, and a plug-in hybrid? This is the WIRED guide for the electric-curious.",
  //     url: "https://www.wired.com/story/everything-you-need-to-know-about-hybrid-cars/",
  //     urlToImage:
  //       "https://media.wired.com/photos/663393c4547d38327b3c2a1e/191:100/w_1280,c_limit/Hybrid-Gars-Guide-Gear-GettyImages-1137081327.jpg",
  //     publishedAt: "2024-05-03T09:30:00Z",
  //     content:
  //       "Have you heard?The hybrids are coming. As sales growth falters for electric vehicles, particularly in the United States, automakers have started to turn their gaze toward the EVs less-charged-up cous… [+2587 chars]",
  //   };
  return (
    <>
      <div className="w-screen justify-start flex-wrap flex p-2 gap-2 m-1">
        {article.urlToImage != null ? (
          <img
            src={article.urlToImage}
            alt="image"
            className="max-h-24 max-w-36 rounded"
          />
        ) : (
          <img
            src={imgAdress}
            alt="image"
            className="max-h-24 max-w-36 rounded"
          />
        )}
        <div className="flex flex-col gap-1">
          <h1 className="text-color-2 text-md font-bold leading-4">
            {article.title}
          </h1>
          <div className="flex justify-between items-center">
            <p className=" flex flex-col leading-4 text-slate-300 text-xs">
              {article.author}
              <span className="font-bold text-color-2">
                {article.source.name}
              </span>
            </p>
            <p className="text-xs text-white">{article.publishedAt}</p>
          </div>
          <p className="hidden text-sm text-slate-700 overflow-hidden">
            {article.description}
          </p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="self-center px-10 bg-color-2 text-center text-white rounded"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default SearchNews;
