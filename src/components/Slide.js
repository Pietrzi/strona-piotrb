import React from "react";

const Slide = ({ url }) => {
  return (
    <div className="slide">
      <img src={url} alt="paint-art" />
    </div>
  );
};

export default Slide;
