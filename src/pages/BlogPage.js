import React from "react";
import Header from "../components/Header";
import BlogWrapper from "../components/BlogWrapper";
import BlogInBlogPage from "../components/BlogInBlogPage";

const BlogPage = ({ postList, setDarkMode, darkMode }) => {
  if (postList.length === 0) return null;

  const style = darkMode ? "bg-black" : "bg-site";
  return (
    <div
      className={`${style} bg-no-repeat bg-cover min-h-screen overflow-hidden pb-24`}
    >
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <BlogInBlogPage postList={postList} />
      <BlogWrapper postList={postList} />
    </div>
  );
};

export default BlogPage;
