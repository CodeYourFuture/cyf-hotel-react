import React from "react";


const TouristInfoCards = (props) => {
    return (
      <div>
        <div className="card">
          <img
            src={props.src}
            className="card-img-top"
          />
          <h1>{props.cardName}</h1>
          <p>{props.text}</p>
          <div className="card-body">
            <a href={props.href} className="btn btn-primary">
              More information
            </a>
          </div>
        </div>
      </div>
    );
         };
 export default TouristInfoCards;




 




 
     
// try to for each
// const TouristInfoCards = (props) => {
//     return (
//        <div>
//           <div className="card">
//             <img src={props.src} className="card-img-top" />
//             <h1>{props.cardName}</h1>
//             <p>{props.text}</p>
//             <div className="card-body">
//               <a href="peoplemakeglasgow.com" className="btn btn-primary">
//                 More information
//               </a>
//             </div>
//           </div>
//        </div>
//           );
//          };
//  export default "TouristInfoCards";