import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards-info">
      <div className="card">
        <img
          src="https://i2-prod.glasgowlive.co.uk/incoming/article20126807.ece/ALTERNATES/s1200b/3_Grand-Central-Glasgow-Hotel-Photography-London-Photographer-Simon-Callaghan-Photography-1505-2.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>Glasgow</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://digital.ihg.com/is/image/ihg/hotel-indigo-manchester-5797205766-4x3"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>Manchester</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.readersdigest.ca/wp-content/uploads/2020/08/london-attractions-tower-bridge.jpg?fit=700,525"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>London</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="https://visitlondon.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
