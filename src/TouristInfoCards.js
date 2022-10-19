import React from "react";

const TouristInfoCards = () => {
  return (
    <div style={{}}>
      <div
        className="card-1"
        style={{
          width: 400,
          backgroundColor: "gray"
        }}
      >
        <img
          src="https://tinyurl.com/4m5zbf94"
          alt="West End Glasgow"
          className="image-1"
          height="50%"
          width="33.3%"
        />
        <br />
        <a href="peoplemakeglasgow.com" className="btn btn-primary">
          Go to Glasgow
        </a>
        <h2>Glasgow</h2>
        <p>
          Glasgow is a port city on the River Clyde in Scotland's western
          Lowlands. It's famed for its Victorian and art nouveau architecture, a
          rich legacy of the city's 18th–20th-century prosperity due to trade
          and shipbuilding. Today it's a national cultural hub, home to
          institutions including the Scottish Opera, Scottish Ballet and
          National Theatre of Scotland, as well as acclaimed museums and a
          thriving music scene.
        </p>
      </div>
      <div
        className="card-2"
        style={{
          width: 400,
          backgroundColor: "red"
        }}
      >
        <img
          src="https://tinyurl.com/ynp9xfhs"
          alt="Salford Quays Footbridge in Manchester"
          className="image-2"
          height="50%"
          width="33.3%"
        />
        <br />
        <a href="visitmanchester.com" className="btn btn-primary">
          Go to Manchester
        </a>
        <h2>Manchester</h2>
        <p>
          Manchester is a major city in the northwest of England with a rich
          industrial heritage. The Castlefield conservation area’s 18th-century
          canal system recalls the city’s days as a textile powerhouse, and
          visitors can trace this history at the interactive Museum of Science &
          Industry. The revitalised Salford Quays dockyards now house the Daniel
          Libeskind-designed Imperial War Museum North and the Lowry cultural
          centre.
        </p>
      </div>
      <div
        className="card-3"
        style={{
          width: 400,
          backgroundColor: "light blue"
        }}
      >
        <img
          src="https://tinyurl.com/ynusjdbe"
          alt="Big Ben Clock Tower in London"
          className="image-3"
          height="50%"
          width="33.3%"
        />
        <br />
        <a href="visitlondon.com" className="btn btn-primary">
          {" "}
          Go to London
        </a>
        <h2>London</h2>
        <p>
          London is one of the world's leading tourism destinations, and the
          city is home to an array of famous tourist attractions. The city
          attracted 20.42 million international visitors in 2018, making it one
          of the world's most visited in terms of international visits.
        </p>
      </div>
    </div>
  );
};

export default TouristInfoCards;
