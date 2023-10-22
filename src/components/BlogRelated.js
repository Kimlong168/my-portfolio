import React, { useEffect } from "react";
import { useState } from "react";
import img1 from "../assets/portfolio-img3.png";
import BlogBox from "./BlogBox";
const BlogRelated = ({ postList, tags, id }) => {
  function haveCommonText(string1, string2) {
    const words1 = string1.split(",");
    const words2 = string2.split(",");

    for (const word1 of words1) {
      for (const word2 of words2) {
        if (word1.trim().toLowerCase() === word2.trim().toLowerCase()) {
          return true; // Found a common word
        }
      }
    }

    return false; // No common words found
  }

  let elements = postList.map((post) => {
    let related = haveCommonText(tags.toString(), post.tags);
    console.log("tostring", tags.toString());

    if (related && post.id !== id) {
      return (
        <>
          <BlogBox
            key={post.id}
            id={post.id}
            direction="right"
            delay={0.2}
            amount={0.3}
            author={post.author.name}
            image={post.img ? post.img : img1}
            title={post.title}
            latest={false}
          />
        </>
      );
    }
    return null;
  });

  elements = elements.filter((element) => element !== null);

  console.log("elements", elements);

  return (
    <div>
      <div className="container mx-auto mt-20">
        {tags.length > 0 && elements.length > 0 ? (
          <div class="text-gradient flex items-center mb-10 border-b ">
            <span className="font-bold">Related Blogs</span>
          </div>
        ) : null}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
          {elements}
        </div>
      </div>
    </div>
  );
};

export default BlogRelated;
