import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="Tourist-Cards">
      {/*Card- 1*/}
      <div className="card">
        <img
          src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/London/london-aerial-thames-guide-xlarge.jpg"
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
            rel="noopener noreferrer"
          >
            More about London
          </a>
        </div>
      </div>
      {/*Card- 2*/}
      <div className="card">
        <img
          src="https://static.independent.co.uk/2021/09/09/10/iStock-1330512300%20%281%29.jpg?width=982&height=726&auto=webp&quality=75"
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
            rel="noopener noreferrer"
          >
            More about Manchester
          </a>
        </div>
      </div>
      {/*Card- 3*/}
      <div className="card">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c7/ab/93/the-university-of-glasgow.jpg?w=700&h=500&s=1"
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
            rel="noopener noreferrer"
          >
            More about Glasgow
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
