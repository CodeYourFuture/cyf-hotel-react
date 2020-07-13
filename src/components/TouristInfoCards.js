import React from "react";

function TouristInfoCards() {
  return (
    <div className="container">
      <div className="card">
        <img
          alt=""
          src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/glasgow-scotland/overview/glasgow-scotland-aerial-view.jpg?$1024x470$"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Go somewhere
          </a>
          <p>
            Glasgow, Gaelic Glaschu, city, west-central Scotland. It is situated
            along both banks of the River Clyde 20 miles (32 km) from that
            river's mouth on the western, or Atlantic, coast. Glasgow is
            Scotland's largest city, and it forms an independent council area
            that lies entirely within the historic county of Lanarkshire.
          </p>
        </div>
      </div>
      <div className="card">
        <img
          alt=""
          src="https://www.architectsjournal.co.uk/pictures/420x280fitpad[31]/8/2/9/3054829_simpson-hagugh-st-johns.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="http://visitmanchester.com" className="btn btn-primary">
            Go somewhere
          </a>
          <p>
            Manchester is the nucleus of the largest metropolitan area in the
            north of England, and it remains an important regional city, but it
            has lost the extraordinary vitality and unique influence that put it
            at the forefront of the Industrial Revolution.
          </p>
        </div>
      </div>
      <div className="card">
        <img
          alt=""
          src="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="http://visitlondon.com" className="btn btn-primary">
            Go somewhere
          </a>
          <p>
            London is the capital and largest city of England and the United
            Kingdom. Standing on the River Thames in the south-east of England,
            at the head of its 50-mile (80 km) estuary leading to the North Sea,
            London has been a major settlement for two millennia. Londinium was
            founded by the Romans.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
