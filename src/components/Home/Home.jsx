import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";

const Home = () => {
  return (
    <>
      <div className="w-full h-full top-32">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      </div>
    </>
  );
};

export default Home;
