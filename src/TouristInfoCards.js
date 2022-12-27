import React from "react";

const style = {
  width: "18rem",
  height: "600px",
  marginLeft: "30px"
};
const flex = {
  display: "flex",
  justifyContent: "center"
};

const buttonPositioning = {
  position: "absolute",
  top: "90%"
};

const TouristInfoCards = () => {
  return (
    <div style={flex}>
      {/* 1 st card */}

      <div className="card" style={style}>
        <img
          src="https://media.timeout.com/images/105400989/750/422/image.jpg"
          style={{ height: "200px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "bold" }}>
            Glasgow
          </h5>
          <p className="card-text">
            Glasgow's city centre is home to flagship stores, impressive
            shopping centres and designer favourites all within an easily
            walkable area.
          </p>
          <a
            href="https://peoplemakeglasgow.com/"
            target="_blank"
            className="btn btn-primary"
            style={buttonPositioning}
          >
            More Information
          </a>
        </div>
      </div>

      {/* 2 nd card */}

      <div className="card" style={style}>
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/3d/31/60/manchester-town-hall.jpg?w=700&h=-1&s=1"
          style={{ height: "200px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "bold" }}>
            Manchester
          </h5>
          <p className="card-text">
            Welcome to the official tourism site of Greater Manchester where you
            can search for things to do in Manchester and find out what's on, as
            well as getting inspiration for your visit to this fantastic city
            region.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            className="btn btn-primary"
            style={buttonPositioning}
          >
            More Information
          </a>
        </div>
      </div>

      {/* 3rd card */}

      <div className="card" style={style}>
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE"
          style={{ height: "200px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "bold" }}>
            London
          </h5>
          <p className="card-text">
            Welcome to London! Discover the best of London with Visit London,
            the official guide to England’s exciting capital. Find things to do
            in London, from iconic sightseeing spots and fun-filled days out to
            top restaurants, theatre and unmissable London events. If you’re not
            able to visit just yet, plan ahead to make the most of your next
            visit.
          </p>
          <a
            href="https://www.visitlondon.com/"
            target="_blank"
            className="btn btn-primary"
            style={buttonPositioning}
          >
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
