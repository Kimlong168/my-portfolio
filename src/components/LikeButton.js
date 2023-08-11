import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { v4 as uuidv4 } from "uuid";
const LikeButton = ({ likesNum, id }) => {
  const [likes, setLikes] = useState(likesNum);
  const [liked, setLiked] = useState(localStorage.getItem(id));

  async function updateLike() {
    const docRef = doc(db, "posts", id);
    await setDoc(
      docRef,
      {
        likes: parseInt(likesNum) + 1,
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
        <span>{likes}</span>
      </button>
    </div>
  );
};

export default LikeButton;
