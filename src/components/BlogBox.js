import React from "react";
import { Link } from "react-router-dom";
// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../variants";
const BlogBox = ({
  image,
  author,
  title,
  direction,
  delay,
  amount,
  url,
  id,
  latest = false,
}) => {
  const style = !latest ? { height: "250px" } : { height: "320px" };
  return (
    <motion.div
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: amount }}
      className="flex-1 group overflow-hidden relative border-2 border-white/50 rounded-xl cursor-pointer inline-block w-full"
      style={style}
    >
      <Link to={`/blog/${id}`}>
        {/* overlay */}
        <div className="bg-transparent w-full h-full z-40 absolute transition-all duration-300 p-r"></div>
        {/* img */}

        <img
          className="scale-125 group-hover:scale-100 transition-all duration-500 object-cover w-full h-full"
          src={image}
          alt=""
        />

        {/* pretitle */}
        <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50 w-full">
          <span className="bg-black/50 leading-10 line-clamp-1 w-full px-2 ">Author: {author}</span>
        </div>
        {/* title */}
        <div className="absolute group-hover:-bottom-full left-12 bottom-12 transition-all duration-500 z-50 w-full">
          <span className="text-xl text-white line-clamp-1 leading-10 bg-black/50 px-2 ">{title}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogBox;
