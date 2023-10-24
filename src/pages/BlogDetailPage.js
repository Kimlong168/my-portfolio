import { Link } from "react-router-dom";
import Header from "../components/Header";
import Markdown from "markdown-to-jsx";
import SharingButton from "../components/SharingButton";
import { useParams } from "react-router-dom";
import GoToTop from "../components/GoToTop";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
// import LikeButton from "../components/LikeButton";
import Author from "../components/Author";
import "../style.css";
import BlogRelated from "../components/BlogRelated";
import { auth } from "../firebase-config";
const BlogDetailPage = ({
  postList,
  setDarkMode,
  darkMode,
  setSearchQuery,
}) => {
  const [tags, setTags] = useState([]);
  // Get the current URL
  var currentURL = window.location.href;
  console.log(currentURL);

  // You can also get query parameters using window.location.search
  var queryString = window.location.search;
  console.log(queryString);

  const { id } = useParams();
  console.log("idddd:", id);

  const style = darkMode ? "bg-black/95" : "bg-site";
  let title = "title";
  let likesNum = 0;
  let postID = "";
  let authName = "";
  useEffect(() => {
    postList.map((post) => {
      if (post.id === id) {
        let tempTags = post.tags ? post.tags.split(",") : [];
        setTags(tempTags);
      }
    });
  }, [postList, id]);

  console.log("tags:", tags);
  const colors = [
    "bg-red-600",
    "bg-blue-500",
    "bg-green-400",
    "bg-yellow-300",
    "bg-indigo-600",
    "bg-gray-200",
    "bg-pink-400",
    // Add more colors and shades as needed
  ];

  function toCapitalCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={`${style} bg-no-repeat bg-cover min-h-screen overflow-hidden  relative`}
    >
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />

      <div id="detail" className="container mx-auto">
        <div className="mb-5">
          <div onClick={() => setSearchQuery("")}>
            <Link to="/blogs">
              <span>◀️ Back</span>
            </Link>
          </div>
        </div>
        {postList.length === 0 && <Loading />}
        <div>
          {postList.map((post) => {
            if (post.id === id) {
              title = post.title;
              likesNum = parseInt(post.likes);
              postID = post.id;
              authName = post.author.name;
              return (
                <>
                  {/* header tag */}
                  <Helmet>
                    <title>{`Blog | ${post.title}`}</title>
                    <link rel="canonical" href={currentURL} />
                    <meta
                      name="description"
                      content="welcome to my blog website - Kimlong Chann"
                    />
                    <meta
                      property="og:image"
                      content={
                        post.img
                          ? "https://kimlongchann.online/img.avif"
                          : "https://images.unsplash.com/photo-1697519755368-84be46c440e9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                    />
                  </Helmet>
                  {/* date */}
                  <div className="text-center text-blue-400 mb-4 text-xl">
                    {post.date ? (
                      <div>Published {post.date}</div>
                    ) : (
                      <div>Published October 10, 2023</div>
                    )}
                  </div>

                  {/* title */}
                  <h1 class="text-3xl lg:text-5xl font-bold uppercase mb-5 text-center text-white">
                    "{post.title}"
                  </h1>

                  {/* tag */}
                  <div className="flex justify-center items-center gap-3 lg:gap-5 w-full  mb-5">
                    {tags.map((tag, index) => (
                      <span
                        title={`tag-${tag.trim()}`}
                        className={`${
                          colors[index] ? colors[index] : "bg-red-400"
                        } text-white text-sm font-semibold py-1.5 px-3 rounded-full min-w-[50px] text-center`}
                      >
                        {toCapitalCase(tag).trim()}
                      </span>
                    ))}
                  </div>

                  {/* cover image */}
                  {post.img && (
                    <div className="mb-12">
                      <img
                        title="Cover image"
                        src={post.img}
                        alt=""
                        className="w-full lg:w-[90%] mx-auto block max-h-[480px] rounded"
                      />
                      <div className="text-sm text-center mt-3 text-blue-400 underline">
                        (<a href={post.img}>View cover image</a>)
                      </div>
                    </div>
                  )}

                  {/* body */}
                  <div id="markdown" className="text-white/90">
                    <Markdown>{post.content}</Markdown>
                  </div>
                  <div className="text-2xl text-pink-500 font-semibold my-10">
                    Written By{" "}
                    <div className="text-blue-400">{post.author.name}</div>
                  </div>
                </>
              );
            }

            return null;
          })}
        </div>
      </div>
      {/* <LikeButton likesNum={likesNum} id={postID} /> */}
      <SharingButton url={currentURL} title={title} />
      <GoToTop />

      {/* about the author */}
      {authName.toLowerCase() === "chann kimlong" && (
        <div className="container mx-auto">
          <Author />
        </div>
      )}
      <div>
        {/* related content */}
        <BlogRelated
          postList={postList}
          tags={tags}
          id={id}
          scrollTop={scrollTop}
        />
      </div>
      <Footer isScrollTop={false} scrollTop={scrollTop} />
    </div>
  );
};

export default BlogDetailPage;
