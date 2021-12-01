import React from "react";

function Card(props) {
  const { image, title, desc, link } = props.data;
  return (
    <div className="card">
      <img alt="" src={image} className="card-img-top" />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h4 className="card-title">{title}</h4>
          <p className="card-desc">{desc}</p>
        </div>
        <a href={link} className="btn btn-primary align-self-center ">
          More info
        </a>
      </div>
    </div>
  );
}
export default Card;
