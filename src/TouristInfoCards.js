import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cardContainer">
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvOFfVbQI4lzClgrnloCNKPXvWwEHXEgPO2Q&usqp=CAU"
          className="card-img-top"
          alt=""
        />{" "}
        <div className="card-body">
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go Glascow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.prolificnorth.co.uk/sites/default/files/styles/lightbox_large/public/images/news/manchester-cityscape0.jpg?itok=VjQDdTYJ"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="visitmanchester.com" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="visitlondon.com" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
