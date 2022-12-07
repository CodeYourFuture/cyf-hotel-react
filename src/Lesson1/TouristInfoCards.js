import React from "react";
import Glasgow from "../image/Glasgow.jpg";
import Manchester from "../image/manchester.jpg";
import London from "../image/london.jpeg";

export default function TouristInfoCards() {
  return (
    <div className="touristCard">
      <div className="card">
        <img src={Glasgow} className="card-img-top" />
        <div className="card-body">
          <h4>Glasgow</h4>
          <p>
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands. It's famed for its Victorian and art nouveau architecture,
            a rich legacy of the city's 18th–20th-century prosperity due to
            trade and shipbuilding.
          </p>
          <a href="http://peoplemakeglasgow.com" className="btn btn-primary">
            More Informations
          </a>
        </div>
      </div>

      <div className="card">
        <img src={Manchester} className="card-img-top" />
        <div className="card-body">
          <h4>Manchester</h4>
          <p>
            Manchester is a major city in the northwest of England with a rich
            industrial heritage. The Castlefield conservation area’s
            18th-century canal system recalls the city’s days as a textile
            powerhouse, and visitors can trace this history at the interactive
            Museum of Science & Industry. The revitalised Salford Quays
            dockyards now house the Daniel Libeskind-designed Imperial War
            Museum North and the Lowry cultural centre
          </p>
          <a href="http://visitmanchester.com" className="btn btn-primary">
            More Informations
          </a>
        </div>
      </div>

      <div className="card">
        <img src={London} className="card-img-top" />
        <div className="card-body">
          <h4>London</h4>
          <p>
            London, the capital of England and the United Kingdom, is a
            21st-century city with history stretching back to Roman times. At
            its centre stand the imposing Houses of Parliament, the iconic ‘Big
            Ben’ clock tower and Westminster Abbey, site of British monarch
            coronations. Across the Thames River, the London Eye observation
            wheel provides panoramic views of the South Bank cultural complex,
            and the entire city
          </p>
          <a href="http://visitlondon.com" className="btn btn-primary">
            More Informations
          </a>
        </div>
      </div>
    </div>
  );
}
