import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="d-flex flex-column align-items-center flex-md-row justify-content-around  align-items-md-start">
      <div className="card-mb2">
        <img src="" alt="#" className="card-image-top" />
        <div className="card-body">
          <h3 className="text-center">London</h3>
          <p>
            London, the capital of England and the United Kingdom, is a
            21st-century city with history stretching back to Roman times. At
            its centre stand the imposing Houses of Parliament, the iconic ‘Big
            Ben’ clock tower and Westminster Abbey, site of British monarch
            coronations. Across the Thames River, the London Eye observation
            wheel provides panoramic views of the South Bank cultural complex,
            and the entire city.
          </p>
          <a href="https://visitlondon.com" className="btn btn-secondary">
            More information
          </a>
        </div>
      </div>
      <div className="card-mb2">
        <img
          src="https://https://www.pexels.com/photo/city-landscape-skyline-building-7784807/"
          alt="#"
          className="card-image-top"
        />
        <div className="card-body">
          <h3 className="text-center">Manchester</h3>
          <p>
            Manchester is a major city in the northwest of England with a rich
            industrial heritage. The Castlefield conservation area’s
            18th-century canal system recalls the city’s days as a textile
            powerhouse, and visitors can trace this history at the interactive
            Museum of Science & Industry. The revitalised Salford Quays
            dockyards now house the Daniel Libeskind-designed Imperial War
            Museum North and the Lowry cultural centre.
          </p>
          <a href="https://visitmanchester.com" className="btn btn-secondary">
            More information
          </a>
        </div>
      </div>
      <div className="card-mb2">
        <img src="" alt="#" className="card-image-top" />
        <div className="card-body">
          <h3 className="text-center">Glasgow</h3>
          <p>
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands. It's famed for its Victorian and art nouveau architecture,
            a rich legacy of the city's 18th–20th-century prosperity due to
            trade and shipbuilding. Today it's a national cultural hub, home to
            institutions including the Scottish Opera, Scottish Ballet and
            National Theatre of Scotland, as well as acclaimed museums and a
            thriving music scene.
          </p>
          <a href="https://peoplemakeglasgow.com" className="btn btn-secondary">
            More information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
