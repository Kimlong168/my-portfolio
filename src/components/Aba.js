import React from "react";
import AbaRiel from "../assets/abaRiel.jpg";
const Aba = ({ setShowQrCode }) => {
  return (
    <div className="relative bg-red-700">
      <div className="fixed inset-0 backdrop-blur-sm z-[1000]">
        <div className=" mt-14 rounded-md text-black overflow-hidden flex flex-col items-center md:w-[400px] md:h-[600px] mx-4 md:mx-auto">
          <img src={AbaRiel} alt="" className="w-full h-full" />
        </div>
        <span
          className="w-8 h-8 cursor-pointer bg-red-600 text-white grid place-items-center rounded-full top-4 right-4 md:top-8 md:right-8 absolute"
        >
          ✖
        </span>
      </div>
    </div>
  );
};

export default Aba;
