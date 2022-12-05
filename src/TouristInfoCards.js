import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="wrapper-cards">
      <div className="card">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c7/ab/93/the-university-of-glasgow.jpg?w=700&h=500&s=1"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands. It's famed for its Victorian and art nouveau architecture,
            a rich legacy of the city's 18th–20th-century prosperity due to
            trade and shipbuilding.
          </p>
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Click for more information.
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            London, the capital of England and the United Kingdom, is a
            21st-century city with history stretching back to Roman times. At
            its centre stand the imposing Houses of Parliament, the iconic ‘Big
            Ben’ clock tower and Westminster Abbey, site of British monarch
            coronations.
          </p>
          <a href="visitlondon.com" className="btn btn-primary">
            Click for more information.
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FManOne-03%284%29.jpg&action=Background_Overlay"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Manchester is a major city in the northwest of England with a rich
            industrial heritage. The Castlefield conservation area’s
            18th-century canal system recalls the city’s days as a textile
            powerhouse, and visitors can trace this history at the interactive
            Museum of Science & Industry.
          </p>
          <a href="visitmanchester.com" className="btn btn-primary">
            Click for more information.
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
