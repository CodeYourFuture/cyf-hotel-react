import React from "react";

function TouristInfoCards() {
  return (
    <div id="allCard">
      <div className="card1">
        <img
          src="https://www.ephotozine.com/resize/2018/25/xlrg/1616_1529882978.jpg?RTUdGk5cXyJFAQgJSEc4egtnfAYYGkVUGwBdOh80SxgRBAAhdSMKY1dhB2osTU0LIjUVDw=="
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            From independent stores to high street retailers, Glasgow is the
            best shopping city. Glasgow's city centre is home to flagship
            stores, impressive shopping centres and designer favourites all
            within an easily walkable area.
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            people make glasgow.com
          </a>
        </div>
      </div>
      <div className="card2">
        <img
          src="https://blog.redletterdays.co.uk/wp-content/uploads/2017/01/show-brooke-2.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Welcome to the official tourism site of Greater Manchester where you
            can search for things to do in Manchester and find out what's on, as
            well as getting inspiration for your visit to this fantastic city
            region.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            `visit manchester.com
          </a>
        </div>
      </div>
      <div className="card3">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            pWelcome to London! Discover the best of London with Visit London,
            the official guide to England’s exciting capital. Find things to do
            in London, from iconic sightseeing spots and fun-filled days out to
            top restaurants, If you’re not a.
          </p>
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            visit london.com
          </a>
        </div>
      </div>
    </div>
  );
}
export default TouristInfoCards;
