import React from 'react';

const TouristInfoCards = props => {
  return (
    <div className="xs-col-12 sm-col-4">
      <div class="card" style={{ width: '18rem' }}>
        <img src={props.image} class="card-img-top" alt="city" />
        <div class="card-body">
          <p class="card-text">{props.city}</p>
          <a href={props.link} class="btn btn-primary">
            Visit us
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
