import React from "react";
import "./TouristInfoCards.css";

const TouristInfoCards = () => {
  return (
    <div className="cardContainer">
      <div className="card">
        <img
          src="https://media.nomadicmatt.com/glasgowguide.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h3 class="card-title">Glasgow</h3>
          <p class="card-text">
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands. It's famed for its Victorian and art nouveau architecture,
            a rich legacy of the city's 18th–20th-century prosperity due to
            trade and shipbuilding. Today it's a national cultural hub, home to
            institutions including the Scottish Opera, Scottish Ballet and
            National Theatre of Scotland, as well as acclaimed museums and a
            thriving music scene
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FManOne-03%284%29.jpg&action=Background_Overlay"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h3 class="card-title">Manchester</h3>
          <p class="card-text">
            Manchester is a major city in the northwest of England with a rich
            industrial heritage. The Castlefield conservation area’s
            18th-century canal system recalls the city’s days as a textile
            powerhouse, and visitors can trace this history at the interactive
            Museum of Science & Industry. The revitalised Salford Quays
            dockyards now house the Daniel Libeskind-designed Imperial War
            Museum North and the Lowry cultural centre.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/tower-bridge-shutterstock-1920x582.jpg?mw=1920&hash=078DDB24AC457E2D8F231FC3E0F7EC55A00C88E3"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h3 class="card-title">London</h3>
          <p class="card-text">
            London, the capital of England and the United Kingdom, is a
            21st-century city with history stretching back to Roman times. At
            its centre stand the imposing Houses of Parliament, the iconic ‘Big
            Ben’ clock tower and Westminster Abbey, site of British monarch
            coronations. Across the Thames River, the London Eye observation
            wheel provides panoramic views of the South Bank cultural complex,
            and the entire city.
          </p>
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
