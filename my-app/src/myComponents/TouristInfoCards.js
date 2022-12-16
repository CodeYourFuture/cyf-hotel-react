import React, { useState, useEffect } from "react";

import Card from "../data/CardData";
import "../App.css";

export default function Parent() {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="buttonCardContainer">
      <button
        type="button"
        className="btn btn-success m-auto d-block"
        onClick={() => setShowCard(!showCard)}
      >
        {showCard ? "hide card" : "show card"}
      </button>
      {/* <button onClick={() => setShowCard(!showCard)}>
        {showCard ? "hide card" : "show card"}
      </button> */}
      {showCard && <TouristInfoCards />}
    </div>
  );
}

function TouristInfoCards() {
  const [cards, setCard] = useState([]);
  useEffect(() => {
    setCard(Card);
  }, []);

  return (
    <div className="d-flex justify-content-center cardContainer">
      {cards.map((card, index) => {
        return (
          <div className="card " key={index}>
            <img src={card.img} alt="city" className="imgCard" />
            <div className="card-body">
              <h3 className="card-title">{card.cityName}</h3>
              <p className="card-text">{card.text}</p>
              <a href={card.link} className="btn btn-primary">
                {`Go to ${card.cityName}`}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// export default function TouristInfoCards() {
//   return (
//     <div>
//       <div className="card">
//         <img src={glsgow} className="card-img-top img" />
//         {/* <img src="../img/paris.jpeg" className="img" /> */}

//         <div className="card-body">
//           <a
//             href="https://www.visitmanchester.com/"
//             className="btn btn-primary"
//           >
//             Go somewhere
//           </a>
//         </div>
//       </div>
//       <div className="card">
//         <img src={manchester} className="card-img-top img" />
//         <div className="card-body">
//           <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//       <div className="card">
//         <img src={london} className="card-img-top img" />
//         <div className="card-body">
//           <a href="https://www.visitlondon.com/" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
