import React from "react";

const GradientBtn = ({ content, link }) => {
  if (link) {
    return (
      <a href={link}>
        <button className="btn btn-sm">{content}</button>
      </a>
    );
  }
  return <button className="btn btn-sm">{content}</button>;
};

export default GradientBtn;
