import React from "react";

const CVOption = ({ setShowCVOption }) => {
  const PNG_FILE_URL = "https://kimlongchann.online/ChannKimlong_CV.png";
  const PDF_FILE_URL = "https://kimlongchann.online/ChannKimlong_CV.PDF";

  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className=" bg-red-700 ">
      <div className="fixed inset-0 backdrop-blur-sm z-[1000] grid place-items-center">
        <div
          className="bg-white
         text-black w-[300px]  relative p-6 rounded-xl"
        >
          <div className="text-center pb-5 font-bold text-3xl text-green-500 uppercase">
            Download as
          </div>
          <div className=" flex gap-8 items-center justify-center ">
            <div
              onClick={() => downloadFileAtURL(PDF_FILE_URL)}
              className="cursor-pointer border px-8 py-1 rounded-full text-white font-bold bg-red-600 hover:bg-transparent hover:text-red-600 hover:border-red-600"
            >
              PDF
            </div>
            <div
              onClick={() => downloadFileAtURL(PNG_FILE_URL)}
              className="cursor-pointer border px-8 py-1 rounded-full text-white font-bold bg-blue-600 hover:bg-transparent hover:text-blue-600 hover:border-blue-600"
            >
              PNG
            </div>
          </div>
          <span
            onClick={() => setShowCVOption(false)}
            className="w-6 h-6 text-xs cursor-pointer bg-red-600 text-white grid place-items-center rounded-full right-1 top-1 absolute"
          >
            ✖
          </span>
        </div>
      </div>
    </div>
  );
};

export default CVOption;
