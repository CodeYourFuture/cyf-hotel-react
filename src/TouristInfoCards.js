import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src={
            "https://www.whatsonnetwork.co.uk/uploads/800x600/251d1ca49b01dd9048ef9967e46bf339.jpg"
          }
          alt={"Glasgow scene"}
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src={
            "https://static.independent.co.uk/2021/11/03/15/ManchesterRecoveryCampaign-32.jpg?quality=75&width=982&height=726&auto=webp"
          }
          alt={"Manchester scene"}
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitmanchester.com" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src={
            "https://media.architecturaldigest.com/photos/56fd9d65ecd154e0329c1627/4:3/w_768/london-travel-guide-lede.jpg"
          }
          alt={"London scene"}
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitlondon.com" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
