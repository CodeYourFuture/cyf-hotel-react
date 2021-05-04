import React from "react";

function TouristInfoCards() {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://www.shoosmiths.co.uk/-/media/images/locations/glasgow.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://peoplemakeglasgow.com"
            className="btn btn-primary"
            target="_blank"
          >
            Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.indlu.co.uk/assets/images/large/option_1.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://visitmanchester.com"
            className="btn btn-primary"
            target="_blank"
          >
            Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/08/17/11/shutterstock-469701251.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://visitlondon.com"
            className="btn btn-primary"
            target="_blank"
          >
            London
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
