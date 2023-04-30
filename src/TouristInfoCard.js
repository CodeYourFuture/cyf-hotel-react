import React from "react";
import { Cards } from "./InfoCards";

const TouristInfoCard = () => {
  return (
    <section>
      {Cards.map(({ src, alt, href, text }, index) => {
        return (
          <div key={index} className="card">
            <img src={require(`${src}`)} alt={alt} className="card-img-top" />
            <div className="card-body">
              <p>{text}</p>
              <a href={href} className="btn btn-secondary">
                Visit
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TouristInfoCard;
