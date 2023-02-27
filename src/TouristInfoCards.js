import React from "react";

function TouristInfoCards() {
  return (
    <div className="cards-wrapper">
      <div className="card">
        <img
          src="https://media.timeout.com/images/105400989/750/422/image.jpg"
          className="card-img-top"
        />
        <h1>Glasgow</h1>
        <p>This is a description</p>
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary" target="_blank">
          More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.citybaseapartments.com/blog/cba-media/2016-10/shutterstock_1072210547.jpg"
          className="card-img-top"
        />
        <h1>Manchester</h1>
        <p>This is a description</p>
        <div className="card-body">
          <a href="https://visitmanchester.com" className="btn btn-primary" target="_blank">
          More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/visit/london-organisations/houses-of-parliament/63950-640x360-london-icons2-640.jpg"
          className="card-img-top"
        />
        <h1>London</h1>
        <p>This is a description</p>
        <div className="card-body">
          <a href="https://visitlondon.com" className="btn btn-primary" target="_blank">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
