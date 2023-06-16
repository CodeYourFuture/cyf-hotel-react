import React from "react";

const CityCard = (props) => {
  return (
    <div className="card">
      <img src={props.imageSource} className="card-img-top" alt="Glasgow" />
      <div className="card-body">
        <h5 className="card-title">{props.cityName}</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <button>
          <a href={props.link} target="_blank">
            {props.visitButton}
          </a>
        </button>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default CityCard;

{/* <a
  href={data.links.homepage[0]}
  rel="noreferrer"
  target="_blank"
  id="homepage-dropdown-item"
>
  {homeIcon} Homepage
</a>; */}