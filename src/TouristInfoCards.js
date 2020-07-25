import React from "react";

const Card = props => {
  return (
    <div className="card">
      <div className="card-body">
        <a href={props.link} className="btn btn-primary">
          Go {props.name}
        </a>
      </div>
    </div>
  );
};

export default Card;

//<img src="..." className="card-img-top" />
