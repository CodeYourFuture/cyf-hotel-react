import React from "react";
import LondonImg from "../data/2.jpg";
import ManchesterImg from "../data/3.jpg";
import GlassgowImg from "../data/1.jpeg";

export default function TouristInfoCards() {
  const cities = [
    { image: LondonImg, cityName: "Go London" },
    { image: ManchesterImg, cityName: "Go Manchester" },
    { image: GlassgowImg, cityName: "Go Glassgow" }
  ];
  return (
    <div className="cont-tourist-cards">
      {cities.map(item => (
        <CardItem
          key={item.cityName}
          image={item.image}
          title={item.cityName}
        />
      ))}
    </div>
  );
}

export function CardItem(props) {
  return (
    <div className="card lg-4 md-4">
      <img src={props.image} className="card-img-top" />
      <div className="card-body">
        <a href="https://visitlondon.com" className="btn btn-primary">
          {props.title}
        </a>
      </div>
    </div>
  );
}

// <div className="card lg-4 md-4">
//     <img src={GlassgowImg} className="card-img-top" />
//     <div className="card-body">
//         <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">Go Glassgow</a>
//     </div>
// </div>
// <div className="card lg-4 md-4">
//     <img src={LondonImg} className="card-img-top" />
//     <div className="card-body">
//         <a href="https://visitmanchester.com" className="btn btn-primary">Go London</a>
//     </div>
// </div>
// <div className="card lg-4 md-4">
//     <img src={ManchesterImg} className="card-img-top" />
//     <div className="card-body">
//         <a href="https://visitlondon.com" className="btn btn-primary">Go Manchester</a>
//     </div>
// </div>
