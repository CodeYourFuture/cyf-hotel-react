import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card">
      <img
        src="https://media.nomadicmatt.com/glasgowguide.jpg"
        className="card-img-top"
      />
      <div className="card-body">
        <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
      <img
        src="https://assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2Folympic-parade%20%281%29-min.jpg&action=BlogDetailContent"
        className="card-img-top"
      />
      <div className="card-body">
        <a href="https://visitmanchester.com" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
      <img
        src="https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz"
        className="card-img-top"
      />
      <div className="card-body">
        <a href="https://visitlondon.com" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
