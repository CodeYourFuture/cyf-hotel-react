import React from "react";

const TouristInfoCards = () => (
  <div className="card-wrapper">
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1571494146906-86de15d3817b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80"
        className="card-img-top"
        alt="image of Glasgow"
      />
      <div className="card-body">
        <h5 className="card-title">Glasgow</h5>
        <p className="card-text text-justify">
          From dawn to dusk and into the night, there are a huge range of things
          to do in Glasgow during every hour of your trip. Glasgow is home to
          some of Scotland's best cultural attractions and best of all, most of
          them are completely free!
        </p>
        <a
          href="https://peoplemakeglasgow.com"
          className="btn btn-info"
          target="_blank"
        >
          Find out more
        </a>
      </div>
    </div>
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1284&q=80"
        className="card-img-top"
        alt="image of Manchester"
      />
      <div className="card-body">
        <h5 className="card-title">Manchester</h5>
        <p className="card-text text-justify">
          Manchester’s extraordinary 19th-century wealth left a permanent record
          in an architectural variety and virtuosity that makes the city centre
          an outdoor museum of styles from Greek classical to early tall
          steel-framed structures.
        </p>
        <a
          href="https://www.visitmanchester.com/"
          className="btn btn-info"
          target="_blank"
        >
          Find out more
        </a>
      </div>
    </div>
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1370&q=80"
        className="card-img-top"
        alt="image of London"
      />
      <div className="card-body">
        <h5 className="card-title">London</h5>
        <p className="card-text text-justify">
          London is the capital and largest city of England and the United
          Kingdom.[8][9] The city stands on the River Thames in the south-east
          of England, at the head of its 50-mile (80 km) estuary leading to the
          North Sea. London has been a major settlement for two millennia, and
          was originally called Londinium, which was founded by the Romans.
        </p>
        <a
          href="https://visitlondon.com/"
          className="btn btn-info"
          target="_blank"
        >
          Find out more
        </a>
      </div>
    </div>
  </div>
);

export default TouristInfoCards;
