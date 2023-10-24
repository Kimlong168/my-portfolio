import { useState, useEffect } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import { v4 as uuidv4 } from "uuid";
import { getDocs, collection } from "firebase/firestore";

const LikeButton = ({ likesNum, id }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(localStorage.getItem(id));
  const [postList, setPostList] = useState([]);

  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      console.log("data", data);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      const post = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      localStorage.setItem(
        "postList",
        JSON.stringify(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );

      setLikes(parseInt(post.filter((post) => post.id === id)[0].likes));
    };
    getPosts();
    console.log("postList", postList);
  }, [liked]);

  async function updateLike() {
    const docRef = doc(db, "posts", id);
    await setDoc(
      docRef,
      {
        likes: parseInt(likes) + 1,
      },
      { merge: true }
    );
    console.log("post updated");
  }

  const handleLike = () => {
    setLikes((a) => a + 1);
    setLiked(true);
    localStorage.setItem(uuidv4() + id, true);
    updateLike();
  };

  return (
    <div className="text-xl flex gap-2 items-center justify-center">
      <button
        disabled={liked}
        className={`border border-red-600 px-3 py-1 rounded-full cursor-pointer mx-auto ${
          liked ? "text-red-600 font-bold" : ""
        }}`}
        onClick={() => {
          handleLike();
        }}
      >
        Like {liked ? "💖" : "💗"}
        <span>{likes === undefined ? "0" : likes}</span>
      </button>
    </div>
  );
};

export default LikeButton;
