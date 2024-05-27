import React, { useState } from "react";

const Header = () => {
  const [show, setshow] = useState(false);

  return (
    <>
      <div className="bg-color-bg sticky top-0 flex items-center gap-2 pr-4 border border-b-2 border-color-1/[0.3] h-16 justify-between">
        <div className="flex items-center gap-2">
          <img src="/Icon.svg" alt="icon" />
          <h1 className="text-2xl font-bold">
            <span className="text-color-1">News</span>
            <span className="text-color-3">-</span>
            <span className="text-color-2">opedia</span>
          </h1>
        </div>
        <div className="sm:hidden">
          <i
            className="material-icons text-color-1"
            onClick={() => setshow((prevShow) => !prevShow)}
          >
            menu
          </i>
        </div>

        <div className="text-lg text-color-1 gap-8 hidden sm:flex ">
          <a href="#news" className="hover:text-xl hover:font-semibold">
            News
          </a>
          <a href="#channels" className="hover:text-xl hover:font-semibold">
            Channels
          </a>
          <a href="#about" className="hover:text-xl hover:font-semibold">
            About
          </a>
        </div>
      </div>
      {/* menu does not display over everything, need to scroll up  */}
      <div>
        {show && (
          <div className="text-lg text-color-1 gap-4 flex flex-col px-4">
            <a href="#news" className="hover:text-xl hover:font-semibold">
              News
            </a>
            <a href="#channels" className="hover:text-xl hover:font-semibold">
              Channels
            </a>
            <a href="#about" className="hover:text-xl hover:font-semibold">
              About
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
