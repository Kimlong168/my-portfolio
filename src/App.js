import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import Error404 from "./pages/Error404";
import { db } from "./firebase-config";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  // const [postList, setPostList] = useState(localStorage.getItem("postList"));
  const [postList, setPostList] = useState([]);

  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      console.log("data", data);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      localStorage.setItem(
        "postList",
        JSON.stringify(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
    };
    getPosts();
    console.log("postList", postList);
  }, []);

  console.log("postList2", postList);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isAuth={isAuth}
              postList={postList}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/blogs"
          element={
            <BlogPage
              postList={postList}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/blog/:id"
          element={
            <BlogDetailPage
              postList={postList}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
