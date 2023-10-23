import { Link } from "react-router-dom";
import Header from "../components/Header";
import Markdown from "markdown-to-jsx";
import SharingButton from "../components/SharingButton";
import { useParams } from "react-router-dom";
import GoToTop from "../components/GoToTop";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
// import LikeButton from "../components/LikeButton";
import "../style.css";
import BlogRelated from "../components/BlogRelated";
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

  return (
    <div
      className={`${style} bg-no-repeat bg-cover min-h-screen overflow-hidden pb-24 relative`}
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
              return (
                <>
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
                  <div className="flex justify-center items-center w-full gap-3 mb-5">
                    {tags.map((tag, index) => (
                      <span
                        className={`${
                          colors[index] ? colors[index] : "bg-red-400"
                        } text-white text-sm font-semibold py-1.5 px-3 rounded-full mr-2 min-w-[50px] text-center`}
                      >
                        {toCapitalCase(tag).trim()}
                      </span>
                    ))}
                  </div>

                  {/* cover image */}
                  <div className="mb-12">
                    <img
                      src={post.img}
                      alt=""
                      className="w-[90%] mx-auto block max-h-[450px] rounded"
                    />
                    <div className="text-sm text-center mt-3 text-blue-400 underline">
                      (<a href={post.img}>View cover image</a>)
                    </div>
                  </div>

                  {/* body */}
                  <div id="markdown" className="text-white/90">
                    <Markdown>{post.content}</Markdown>
                  </div>
                  <small className="text-xl">Author: {post.author.name}</small>
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
      <div>
        {/* related content */}
        <BlogRelated postList={postList} tags={tags} id={id} />
      </div>
    </div>
  );
};

export default BlogDetailPage;
