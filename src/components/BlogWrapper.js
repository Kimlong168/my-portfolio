import React from "react";

import img1 from "../assets/portfolio-img3.png";
import BlogBox from "./BlogBox";
const BlogWrapper = ({ postList }) => {
  return (
    <div>
      <div className="container mx-auto mt-20">
        <div class="text-gradient flex items-center mb-10 border-b ">
          <span className="font-bold">All Blogs</span>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
          {postList.map((post) => (
            // <Link to={`/blog?${post.id}`}>
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
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogWrapper;
