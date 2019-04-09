import React from 'react'

export default function TouristInfoCards(props) {
  return (
    <div class="">
      <img src={props.src} class="card-img-top" alt={props.alt} />
      <div class="card-body">
              <h5 class="card-title">{props.city}</h5>
        <a href="/" class="btn btn-primary">
                  Go to {props.city}
        </a>
      </div>
    </div>
  );
}
