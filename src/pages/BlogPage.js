import React from "react";
import Header from "../components/Header";
import BlogWrapper from "../components/BlogWrapper";
import BlogInBlogPage from "../components/BlogInBlogPage";
import Footer from "../components/Footer";
const BlogPage = ({ postList, setDarkMode, darkMode, setSearchQuery }) => {
  if (postList.length === 0) return null;
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const style = darkMode ? "bg-black" : "bg-site";
  return (
    <div
      className={`${style} bg-no-repeat bg-cover min-h-screen overflow-hidden `}
    >
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <BlogInBlogPage postList={postList} setSearchQuery={setSearchQuery} />
      <BlogWrapper postList={postList} setSearchQuery={setSearchQuery} />
      <Footer scrollTop={scrollTop} isScrollTop={true}/>
    </div>
  );
};

export default BlogPage;
