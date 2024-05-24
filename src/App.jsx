import { useState } from "react";
import ChannelSearch from "./components/ChannelSearch";
import ChannelButton from "./components/ChannelButton";
import Categories from "./components/Categories";
import NewsCard from "./components/NewsCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Categories />
      {/* <ChannelSearch />
      <ChannelButton /> */}
    </>
  );
}

export default App;
