import React from "react";
import Lisboncard from "../Hotel Images/lisbon.jpg";
import Manchestercard from "../Hotel Images/manchester.jpg";
import Pariscard from "../Hotel Images/paris.jpg";

function TouristInfoCards() {
  return (
    <div className="cardsEl">
      <div className="card">
        <img src={Lisboncard} alt="Lisbon" className="card-img-top" />
        <div className="card-body">
          <p>
            "Lisbon is Portugal’s hilly, coastal capital city. From imposing São
            Jorge Castle, the view encompasses the old city’s pastel-colored
            buildings, Tagus Estuary and Ponte 25 de Abril suspension bridge.
            Nearby, the National Azulejo Museum displays 5 centuries of
            decorative ceramic tiles. Just outside Lisbon is a string of
            Atlantic beaches, from Cascais to Estoril"
          </p>
          <a
            href="https://www.getyourguide.com/lisbon"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img src={Manchestercard} alt="Manchester" className="card-img-top" />
        <div className="card-body">
          <p>
            "Manchester is the only UK city to feature in Lonely Planet's Best
            in Travel 2023 list and the only UK city in National Geographic's
            influential ‘Best of the World’ list which annually sets out 25 of
            the must-see places to visit around the globe."
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img src={Pariscard} alt="Paris" className="card-img-top" />
        <div className="card-body">
          <p>
            "Paris, France's capital, is a major European city and a global
            center for art, fashion, gastronomy and culture. Its 19th-century
            cityscape is crisscrossed by wide boulevards and the River Seine.
            Beyond such landmarks as the Eiffel Tower and the 12th-century,
            Gothic Notre-Dame cathedral, the city is known for its cafe culture
            and designer boutiques along the Rue du Faubourg Saint-Honoré."
          </p>
          <a
            href="https://www.getyourguide.com/paris"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
