import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
const Home = ({ setDarkMode, darkMode, isAuth, postList }) => {
  const style = darkMode ? "bg-black" : "bg-site";
  return (
    <div className={`${style} bg-no-repeat bg-cover overflow-hidden`}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <Banner />
      <Nav darkMode={darkMode} />
      <About />
      <Services />
      <Work />
      <Blog postList={postList} />
      <Contact />

      {/* <div className='h-[2300px]'></div> */}
    </div>
  );
};

export default Home;
