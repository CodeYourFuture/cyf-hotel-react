import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards-Wrapper">
      {/*Card- 1*/}
      <div className="card">
        <img
          src="https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <h3>London</h3>
          <p>
            London, the capital of England and the United Kingdom, is a
            21st-century city with history stretching back to Roman times. At
            its centre stand the imposing Houses of Parliament, the iconic ‘Big
            Ben’ clock tower and Westminster Abbey, site of British monarch
            coronations. Across the Thames River, the London Eye observation
            wheel provides panoramic views of the South Bank cultural complex,
            and the entire city.
          </p>
          <a
            target="_blank"
            href="https://www.visitlondon.com"
            className="btn btn-primary"
          >
            Go London
          </a>
        </div>
      </div>

      {/*Card- 2*/}
      <div className="card">
        <img
          src="https://www.pocruises.com/content/dam/po/marketing-assets/destination-new/regional-airports/Manchester-2880x1047.jpg.1582286477391.image.750.563.low.jpg"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <h3>Manchester</h3>
          <p>
            Manchester is a major city in the northwest of England with a rich
            industrial heritage. The Castlefield conservation area’s
            18th-century canal system recalls the city’s days as a textile
            powerhouse, and visitors can trace this history at the interactive
            Museum of Science and Industry. The revitalised Salford Quays
            dockyards now house the Daniel Libeskind-designed Imperial War
            Museum North and the Lowry cultural centre.
          </p>
          <a
            target="_blank"
            href="https://www.visitmanchester.com"
            className="btn btn-primary"
          >
            Go Manchester
          </a>
        </div>
      </div>

      {/*Card- 3*/}
      <div className="card">
        <img
          src="https://www.tltsolicitors.com/-/media/tlt-solicitors/images/global/hero/location/tlt_website-graphics-2_headers_1600x300_teal/glasgow-office.jpg?h=451&w=790&la=en&hash=833F4CCFD6EB9AACBF58E8C45B680DB0DA7A73C1"
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body">
          <h3>Glasgow</h3>
          <p>
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands. It's famed for its Victorian and art nouveau architecture,
            a rich legacy of the city's 18th–20th-century prosperity due to
            trade and shipbuilding. Today it's a national cultural hub, home to
            institutions including the Scottish Opera, Scottish Ballet and
            National Theatre of Scotland, as well as acclaimed museums and a
            thriving music scene.
          </p>
          <a
            target="_blank"
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            Go Glasgow
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
