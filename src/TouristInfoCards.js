import React from "react";

function TouristInfoCards() {
  return (
    <div className="card-container">
      <div className="card">
        <img
          alt="glasgow"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/f9/glasgow.jpg?w=1100&h=600&s=1"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            VISIT GLASGOW
          </a>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
      <div className="card">
        <img
          alt="Manchester"
          src="https://ctfimages.intoglobal.com/xw2h6mjophtz/1TYSrypcMzY3kKddGhuZo1/e69f694bcf4f68aa214016cfc4f4259f/manchester_Skyline__Craig_1_small.jpg?w=1255&q=80"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="visitmanchester.com" className="btn btn-primary">
            VISIT MANCHESTER
          </a>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="card">
        <img
          alt="London"
          src="https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="visitlondon.com" className="btn btn-primary">
            VISIT LONDON
          </a>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
