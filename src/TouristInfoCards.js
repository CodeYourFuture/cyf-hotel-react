import React from "react";

// const CardCreator = ({imageSource, city, hyperTextRef}) => {
//  return (
//     <div className="card">
//         <img
//           src="{imageSource}"
//           alt=""
//           className="card-img-top"
//         />
//         <div className="card-body">
//           <p>{city}</p>
//           <a href="{hyperTextRef}" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>

//  )
// }

const TouristInfoCards = () => {
  return (
    <div className="cardBox">
      <div className="card">
        <img
          src={require("./jason-jeandron-o5aYYDkLgYU-unsplash.jpg")}
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <p>MANCHESTER</p>
          <a href="http://visitmanchester.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src={require("./craig-mckay-gndl-el3n00-unsplash.jpg")}
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <p>GLASGOW</p>
          <a href="http://peoplemakeglasgow.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src={require("./giammarco-q140lHKzXZY-unsplash.jpg")}
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <p>LONDON</p>
          <a href="http://visitlondon.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
