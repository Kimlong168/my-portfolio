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
      viewport={{ once: false, amount: amount }}
      className="flex-1 group overflow-hidden relative border-2 border-white/50 rounded-xl cursor-pointer inline-block"
      style={style}
    >
      <Link to={`/blog/${id}`}>
        {/* overlay */}
        <div className="bg-black/50 group-hover:bg-transparent w-full h-full z-40 absolute transition-all duration-300"></div>
        {/* img */}

        <img
          className="scale-125 group-hover:scale-100 transition-all duration-500 object-cover w-full h-full"
          src={image}
          alt=""
        />

        {/* pretitle */}
        <div className="absolute group-hover:-bottom-full left-12 bottom-24 transition-all duration-500 z-50">
          <span className="text-gradient">Author: {author}</span>
        </div>
        {/* title */}
        <div className="absolute group-hover:-bottom-full left-12 bottom-12 transition-all duration-500 z-50">
          <span className="text-3xl text-white line-clamp-1">{title}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogBox;
