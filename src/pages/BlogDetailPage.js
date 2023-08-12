import { Link } from "react-router-dom";
import Header from "../components/Header";
import Markdown from "markdown-to-jsx";
import SharingButton from "../components/SharingButton";
import { useParams } from "react-router-dom";
import GoToTop from "../components/GoToTop";
import Loading from "../components/Loading";
import LikeButton from "../components/LikeButton";
import "../style.css"
const BlogDetailPage = ({ postList, setDarkMode, darkMode }) => {
  // Get the current URL
  var currentURL = window.location.href;
  console.log(currentURL);

  // You can also get query parameters using window.location.search
  var queryString = window.location.search;
  console.log(queryString);

  const { id } = useParams();
  console.log("idddd:", id);

  const style = darkMode ? "bg-black" : "bg-site";
  let title = "title";
  let likesNum = 0;
  let postID = "";
  return (
    <div
      className={`${style} bg-no-repeat bg-cover min-h-screen overflow-hidden pb-24 relative`}
    >
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />

      <div id="detail" className="container mx-auto">
        <div className="mb-5">
          <Link to="/blogs">
            <span>◀️ Back</span>
          </Link>
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
                  <h1 class="text-3xl lg:text-5xl font-bold uppercase mb-5 text-center text-white/50">
                    "{post.title}"
                  </h1>
                  <div id="markdown">
                    <Markdown>{post.content}</Markdown>
                  </div>
                  <small>Author: {post.author.name}</small>
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
    </div>
  );
};

export default BlogDetailPage;
