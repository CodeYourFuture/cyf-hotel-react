import React from "react";

const TouristInfoCards = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: 20
      }}
    >
      <div class="card" style={{ width: "400px" }}>
        <img
          class="card-img-top"
          src="/glasgow.jpg"
          alt="glasgow"
          style={{ width: "100%", height: "100%" }}
        />
        <div class="card-body">
          <h4 class="card-title">Glasgow</h4>
          <p class="card-text">
            From independent stores to high street retailers, Glasgow is the
            best shopping city. Glasgow's city centre is home to flagship
            stores, impressive shopping centres and designer favourites all
            within an easily walkable area. The city is also rich in artists and
            creators which makes for a thriving and exciting independent
            shopping scene.
          </p>
          <a
            href="https://peoplemakeglasgow.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>

      <div class="card" style={{ width: "400px" }}>
        <img
          class="card-img-top"
          src="/london.jpg"
          alt="london"
          style={{ width: "100%", height: "100%" }}
        />
        <div class="card-body">
          <h4 class="card-title">London</h4>
          <p class="card-text">
            Discover the best of London with Visit London, the official guide to
            England’s exciting capital. Find things to do in London, from iconic
            sightseeing spots and fun-filled days out to top restaurants,
            theatre and unmissable London events. If you’re not able to visit
            just yet, plan ahead to make the most of your next visit.
          </p>
          <a
            href="https://visitlondon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>

      <div class="card" style={{ width: "400px" }}>
        <img
          class="card-img-top"
          src="/manchester.jpg"
          alt="Manchester"
          style={{ width: "100%", height: "100%" }}
        />
        <div class="card-body">
          <h4 class="card-title">Manchester</h4>
          <p class="card-text">
            Welcome to the official tourism site of Greater Manchester where you
            can search for things to do in Manchester and find out what's on, as
            well as getting inspiration for your visit to this fantastic city
            region.
            <br />
            <br />
            <br />
          </p>
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
    </div>

    //         <div id="idContainer">
    //             <div className="card">
    //         	<img src="/glasgow.jpg" className="card-img-top" alt="glasgow" style={{width:"100%", height: "400px"}}/>
    //                 	<div className="card-body">
    //                         <h4 className="card-title">Glasgow</h4>
    //                         <p className="card-text">
    //                         From independent stores to high street retailers,
    //                         Glasgow is the best shopping city.
    //                         Glasgow's city centre is home to flagship stores,
    //                         impressive shopping centres and designer
    //                         favourites all within an easily walkable area.
    //                         The city is also rich in artists
    //                         and creators which makes for a thriving and
    //                         exciting independent shopping scene.
    //                         </p>
    // 	            	<a href="https://peoplemakeglasgow.com/"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     className="btn btn-primary">More Information</a>
    // 	    </div>
    // </div>

    // <div className="card">
    //         	<img src="/london.jpg" className="card-img-top" alt="london"/>
    //                 	<div className="card-body">
    //                         <h4>London</h4>
    //                         <p>
    //                         Discover the best of London with Visit London, the official guide to England’s exciting capital.
    //                         Find things to do in London, from iconic sightseeing
    //                         spots and fun-filled days out to top restaurants,
    //                         theatre and unmissable London events. If you’re not able to visit just yet,
    //                         plan ahead to make the most of your next visit.
    //                         </p>
    // <a href="https://visitlondon.com/"
    // target="_blank"
    // rel="noopener noreferrer"
    // className="btn btn-primary">More Information</a>
    // 	    </div>
    // </div>

    // <div className="card">
    //         	<img src="/glasgow.jpg" className="card-img-top" alt=""/>
    //                 	<div className="card-body">
    //                         <h4>Manchester</h4>
    //                         <p>
    //                         Welcome to the official tourism site of Greater Manchester where you can search for things
    //                         to do in Manchester and find out what's on, as well as getting inspiration for your visit to
    //                         this fantastic city region.

    //                         </p>
    // <a href="https://www.visitmanchester.com/"
    // target="_blank"
    // rel="noopener noreferrer"
    // className="btn btn-primary">More Information</a>
    // 	    </div>
    // </div>

    //             </div>
  );
};

export default TouristInfoCards;
