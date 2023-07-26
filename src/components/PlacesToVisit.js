import React from "react";
import Imgs1 from "../images/hotelGlasgow1.jpg";
import Imgs2 from "../images/hotelGlasgow2.jpg";
import Imgs3 from "../images/hotelGlasgow3.jpeg";
import Imgs4 from "../images/london11.jpg";
import Imgs5 from "../images/london2.jpeg";
import Imgs6 from "../images/london33.jpg";
import Imgs7 from "../images/manchester1.jpg";
import Imgs8 from "../images/manchester31.jpg";
import Imgs9 from "../images/manchester3.jpg";

export default function PlacesToVisit() {
  return (
    <div className="places">
      <div className="glasgow">
        <p>
          The city has world-class museums, galleries and attractions, Gallery
          and Museum. Glasgow Science Centre or Riverside.
        </p>
        <div>
          <img src={Imgs1} alt="glasgow" />
          <div className="p-a">
            <p>Gorge square, Glasgow</p>
            <a href="https://peoplemakeglasgow.com/">visit</a>
          </div>
        </div>
        <div>
          <img src={Imgs2} alt="glasgow" />
          <div className="p-a">
            <p>Clyde bridge, Glasgow</p>
            <a href="https://peoplemakeglasgow.com/">Visit</a>
          </div>
        </div>
        <div>
          <img src={Imgs3} alt="glasgow" />
          <div className="p-a">
            <p>Buchanan galleries, Glasgow</p>
            <a href="https://peoplemakeglasgow.com/">visit</a>
          </div>
        </div>
      </div>
      <div className="london">
        <p>
          Explore the city on sightseeing tours, soak up culture at museums and
          galleries, or choose from the many free things to do.
        </p>
        <div>
          <img src={Imgs4} alt="glasgow" />
          <div className="p-a">
            <p>Hyde park,London</p>
            <a href="https://www.visitlondon.com/">visit</a>
          </div>
        </div>
        <div>
          <img src={Imgs5} alt="glasgow" />
          <div className="p-a">
            <p>London river</p>
            <a href="https://www.visitlondon.com/">visit</a>
          </div>
        </div>
        <div>
          <img src={Imgs6} alt="glasgow" />
          <div className="p-a">
            <p>Big Ben, London</p>
            <a href="https://www.visitlondon.com/">visit </a>
          </div>
        </div>
      </div>
      <div className="manchester">
        <p>
          Whether you’re seeking culture, nightlife, history, or just good fun,
          there are plenty of things to do in Manchester.
        </p>
        <div>
          <img src={Imgs7} alt="glasgow" />
          <div className="p-a">
            <p>canal area, manchester</p>
            <a href="https://www.visitmanchester.com/">visit</a>
          </div>
        </div>
        <div>
          <img src={Imgs8} alt="glasgow" />
          <div className="p-a">
            <p>footbridge, manchester</p>
            <a href="https://www.visitmanchester.com/">visit</a>
          </div>
        </div>

        <div>
          <img src={Imgs9} alt="glasgow" />
          <div className="p-a">
            <p>Albert square, manchester</p>
            <a href="https://www.visitmanchester.com/">visit</a>
          </div>
        </div>
      </div>
    </div>
  );
}
