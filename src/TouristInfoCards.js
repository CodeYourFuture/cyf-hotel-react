import React from "react";

const TouristInfoCard = () => {
  return (
    <div className="card">
      <div className="card-info">
        <div className="img-container">
          <img
            src="https://peoplemakeglasgow.com/assets/general/_1200x630_crop_center-center_none/West-end-Cityscape-of-Kelvingrove-Header.jpg"
            className="card-img-top"
            alt="greenery of glasgow"
          />
        </div>
        <h3>Glasgow</h3>
        <p>
          Compared to other cities of its size, Glasgow is bursting with fun
          activities and interesting events. Whether it’s a social event, a
          show, or a workshop, there’s something to suit nearly every interest
          and hobby.
        </p>
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card-info">
        <div className="img-container">
          <img
            src="https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/manchester_town_hall_ve13463_1200x600_0_1_0_0.jpg"
            className="card-img-top"
            alt="manchester"
          />
        </div>
        <h3>Manchester</h3>
        <p>
          Compared to other cities of its size, Manchester is bursting with fun
          activities and interesting events. Whether it’s a social event, a
          show, or a workshop, there’s something to suit nearly every interest
          and hobby.
        </p>
        <div className="card-body">
          <a href="https://visitmanchester.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card-info">
        <div className="img-container">
          <img
            src="https://media.architecturaldigest.com/photos/56fd9d65ecd154e0329c1627/4:3/w_768/london-travel-guide-lede.jpg"
            className="card-img-top"
            alt="london"
          />
        </div>
        <h3>London</h3>
        <p>
          Compared to other cities of its size, London is bursting with fun
          activities and interesting events. Whether it’s a social event, a
          show, or a workshop, there’s something to suit nearly every interest
          and hobby.
        </p>
        <div className="card-body">
          <a href="https://visitlondon.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCard;
