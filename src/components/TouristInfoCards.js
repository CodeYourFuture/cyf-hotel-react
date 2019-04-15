import React from 'react'

export default function TouristInfoCards(props) {
  return (
    <div className="">
      <img src={props.src} className="card-img-top" alt={props.alt} />
      <div className="card-body">
              <h5 className="card-title">{props.city}</h5>
        <a href="/" className="btn btn-primary">
                  Go to {props.city}
        </a>
      </div>
    </div>
  );
}
