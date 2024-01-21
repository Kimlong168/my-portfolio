import React from "react";

const ShowAchievement = ({ image, title, description }) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-[100px] items-center ">
      <div className="flex-1 ">
        <h2 className="h3 font-medium text-blue-400 hover:text-pink-600 hover:border-b-4 cursor-pointer border-blue-500 transition-all">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flex-1 overflow-hidden max-w-[400px]">
        <img
          className="rounded-xl w-full h-full hover:scale-110 transition-all cursor-pointer border-pink-600"
          src={image}
          alt="pic"
        />
      </div>
    </div>
  );
};

export default ShowAchievement;
