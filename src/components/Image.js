import React from "react";

const Image = ({ image }) => {
  return <img src={image.file} alt={image.alt} className="card-img-top" />;
};

export default Image;
