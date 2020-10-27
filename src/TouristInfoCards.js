import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://media.gettyimages.com/photos/before-sunrise-clyde-arc-glasgow-scotland-picture-id859493494?s=612x612"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Visit Glasgow</h5>
            <p className="card-text">
              Discover Glasgow's wide and varied history, from its Dark Age
              roots and the Medieval City, to the legacy of the Victorian period
              and beyond..
            </p>
            <a
              href="https://peoplemakeglasgow.com/"
              className="btn btn-primary"
            >
              Take a tour
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Visit Manchester</h5>
            <p className="card-text">
              Welcome to the official tourism site of Greater Manchester where
              you can search for things to do and find out what's on, as well as
              getting inspiration for your visit to this fantastic city
              region...
            </p>
            <a
              href="https://www.visitmanchester.com/"
              className="btn btn-primary"
            >
              Take a tour
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/City_of_London%2C_seen_from_Tower_Bridge.jpg/1280px-City_of_London%2C_seen_from_Tower_Bridge.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Visit London</h5>
            <p className="card-text">
              Welcome to Visit London, England. Find things to do in London,
              days out in London, London attractions and sightseeing,
              restaurants and hotels in London.
            </p>
            <a href="https://visitlondon.com/" className="btn btn-primary">
              Take a tour
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
