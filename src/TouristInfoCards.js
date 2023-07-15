import React from "react";
// import TouristInfoCards from TouristInfoCards;

// const TouristInfoCards = () => {
function TouristInfoCards() {
  return (
    <div className="card-container">
      <div className="individualCard">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1531152127291-ea24c3b2a1da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            alt="Lago di Braies"
            className="card-img-top"
          />
          <div className="card-body">
            <h1 style={{ color: "#cf0058" }}>Glasgow</h1>
            <p>
              <br></br>Hold on to your bagpipes and brace yourself for an epic
              adventure in Glasgow! From exploring spooky underground tunnels to
              sampling delicious haggis and belting out karaoke in lively pubs,
              this city is a quirky blend of history, humor, and Highland charm.
              Let the fun begin!
            </p>
            <a
              href="https://peoplemakeglasgow.com/"
              className="btn btn-info"
              class="btn btn-primary btn-sm"
            >
              Discover...
            </a>
            {/* <button style={{color: "#cf0058"}}>Read more</button> */}
          </div>
        </div>
      </div>
      <div className="individualCard">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Lago di Braies"
            className="card-img-top"
          />
          <div className="card-body">
            <h1 style={{ color: "#cf0058" }}>Manchester</h1>
            <p>
              <br></br>Welcome to Manchester, the city that rocks! From
              legendary music venues to vibrant street art, football fever, and
              buzzing nightlife, Manchester is a playground for fun and
              excitement. Get ready to be amazed!
            </p>
            <a
              href="https://www.visitmanchester.com/"
              className="btn btn-info"
              class="btn btn-primary btn-sm"
            >
              Explore more...
            </a>
            {/* <button style={{color: "#cf0058"}}>Read more</button> */}
          </div>
        </div>
      </div>
      <div className="individualCard">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1632860644196-e1e464596ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Lago di Braies"
            className="card-img-top"
          />
          <div className="card-body">
            <h1 style={{ color: "#cf0058" }}>London</h1>
            <p>
              <br></br>Welcome to London, where the Queen reigns and Big Ben
              chimes with a cheeky British charm! Hop on a red double-decker
              bus, indulge in fish and chips, catch a West End show, and get
              lost in the city's eccentric mix of history and modernity. Cheers,
              mate!
            </p>
            <a
              href="https://www.visitlondon.com/"
              className="btn btn-info"
              class="btn btn-primary btn-sm"
            >
              Check it out...!
            </a>
            {/* <button style={{color: "#cf0058"}} >Find out more...</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;