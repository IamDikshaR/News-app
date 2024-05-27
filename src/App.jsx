import { useState } from "react";
import ChannelSearch from "./components/ChannelSearch";
import ChannelButton from "./components/ChannelButton";
import Categories from "./components/Categories";
import NewsCard from "./components/NewsCard";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div id="news">
        <SearchBar />
        <Categories />
      </div>
      <ChannelSearch />
      <div id="channels">
        <ChannelButton />
      </div>
      {/* <div className="sticky bottom-2">
        <i className="material-icons  bg-color-1 text-white py-2 px-2 rounded-[50%] hover:text-3xl hover:px-3 hover:shadow-md hover:shadow-slate-400">
          arrow_upward
        </i>
      </div> */}
      {/* <NewsCard /> */}
    </>
  );
}
export default App;
