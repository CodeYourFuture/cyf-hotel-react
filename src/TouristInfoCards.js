import React from "react";

function TouristInfoCards() {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img
            src="https://a.cdn-hotels.com/gdcs/production95/d16/cc514640-8f0f-11e8-9bad-0242ac110002.jpg"
            className="card-img-top"
            alt="Glasgow View"
          />
          <div className="card-body">
            <h1>Glasgow</h1>
            <p>
              As Scotland’s largest city, Glasgow is famed for its culture,
              shopping and people. Spend your day exploring a wide range of
              fascinating free museums and galleries, and taking advantage of
              tips from friendly local people on the city’s hidden gems — then
              choose from 130+ weekly musical events for a special night out.
            </p>
            <a href="www.peoplemakeglasgow.com" className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.britannica.com/42/116342-050-5AC41785/Manchester-Eng.jpg"
            className="card-img-top"
            alt="Manchester View"
          />
          <div className="card-body">
            <h1>Manchester</h1>
            <p>
              Famed for its soccer team and music scene, which has produced the
              likes of The Smiths and Oasis, this centre for sports and the arts
              is a down-to-earth and friendly city. The so-called Capital of the
              North has overcome industrial decline and bombing to become a
              confident and cosmopolitan city of over two million people.
            </p>
            <a href="www.visitmanchester.com" className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Best-Things-to-do-in-London-1200x900.jpg.optimal.jpg
          "
            className="card-img-top"
            alt="London View"
          />
          <div className="card-body">
            <h1>London</h1>
            <p>
              London is layered with history, where medieval and Victorian
              complement a rich and vibrant modern world. The Tower of London
              and Westminster neighbour local pubs and markets, and time-worn
              rituals like the changing of the guards take place as commuters
              rush to catch the Tube.
            </p>
            <a href="www.visitlondon.com" className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TouristInfoCards;
