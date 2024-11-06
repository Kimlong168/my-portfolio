import React from "react";
// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../variants";

const AchievementBox = ({
  image,
  pretitle,
  title,
  direction,
  delay,
  amount,
  url,
  latest = false,
}) => {
  const style = latest ? { height: "auto" } : { height: "210px" };
  return (
    <motion.a
      href={url}
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: amount }}
      className="flex-1 group overflow-hidden relative border-2 border-white/50 rounded-xl bg-white min-h-[210px]"
      style={style}
    >
      {/* overlay */}
      <div className="group-hover:bg-black/70 w-full h-full z-40 absolute transition-all duration-300"></div>
      {/* img */}
      <img
        className="group-hover:scale-125 transition-all duration-500 object-fit w-full h-full"
        src={image}
        alt=""
      />
      {/* pretitle */}
      <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
        <span className="text-gradient">{pretitle}</span>
      </div>
      {/* title */}
      <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50">
        <span className="text-3xl text-white line-clamp-1">{title}</span>
      </div>
    </motion.a>
  );
};

export default AchievementBox;
