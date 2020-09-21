import React from "react";

export default function TouristInfoCards() {
  return (
    <div>
      <div className="row mx-auto">
        <div className="col-sm-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/London/london-aerial-thames-guide-xlarge.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Explore London</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="visitlondon.com" className="btn btn-primary">
                Go London
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://ilovemanchester.com/wp-content/uploads/2019/10/manchester-cityscape-696x407.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Explore Manchester</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="visitmanchester.com" className="btn btn-primary">
                Go Manchester
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://www.telegraph.co.uk/content/dam/Travel/Cruise/June-2020/glasgow-scotland-city-skyline-getty.jpg?imwidth=450"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Explore Glasgow</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="peoplemakeglasgow.com" className="btn btn-primary">
                Go Glasgow
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
