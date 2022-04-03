import React from "react";

function TouristInfoCards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src="https://www.ephotozine.com/resize/2018/25/xlrg/1616_1529882978.jpg?RTUdGk5cXyJFAQgJSEc4egtnfAYYGkVUGwBdOh80SxgRBAAhdSMKY1dhB2osTU0LIjUVDw=="
            width="290px"
            heght="0px"
            alt=""
            className="card-img-top"
          />
          <p>
            From independent stores to high street retailers, Glasgow is the
            best shopping city. Glasgow's city centre is home to flagship
            stores, impressive shopping centres and designer favourites all
            within an easily walkable area.The city is also rich in artists and
            creators which makes for a thriving and exciting independent
            shopping scene.
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            people make glasgow.com
          </a>
        </div>
        <div className="col">
          <img
            src="https://blog.redletterdays.co.uk/wp-content/uploads/2017/01/show-brooke-2.jpg"
            width="290"
            height={330}
            alt=""
            className="card-img-top"
          />
          <p>
            Welcome to the official tourism site of Greater Manchester where
            youcan search for things to do and find out what's on, as well as
            getting inspiration for your visit to this fantastic city region.
            one of the most exciting places to visit in the UK right now where
            everybody is very warmly welcomed.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            visit manchester.com
          </a>
        </div>
        <div className="col">
          <img
            src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A"
            width="290px"
            height="330px"
            alt=""
          />
          <p>
            pWelcome to London! Discover the best of London with Visit London,
            the official guide to England’s exciting capital. Find things to do
            in London, from iconic sightseeing spots and fun-filled days out to
            top restaurants, If you’re not able to visit just yet, plan ahead to
            make the most of your next visit.
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
