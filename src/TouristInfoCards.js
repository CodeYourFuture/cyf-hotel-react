import React from "react";
const TouristInfoCards = () => {
  return (
    <div className="cardWrapper">
      <div className="card">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.VURrH1cM4rNMrNgm0z_bVgHaEo&pid=Api&P=0&w=259&h=162"
          className="card-img-top"
          alt="London city"
        />
        <div className="card-body">
          <h2>London</h2>
          <p>
            London is the capital and largest city of England and the United
            Kingdom. It stands on the River Thames in south-east England at the
            head of a 50-mile estuary down to the North Sea. It has been a major
            settlement for two millennia
          </p>
          <a
            href="http://visitlondon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.makeurmove.co.uk/images/articles/uploads/0/0_1594983951608.jpg"
          alt="Manchester City"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>Manchester</h2>
          <p>
            Manchester is a city and metropolitan borough in Greater Manchester,
            England. The city has the country's fifth-largest population at
            547,627 and lies within the United Kingdom's second-most populous
            urban area, with a population of 2.7 million, third most-populous
            county, at around 2.8 million, and third-most populous metropolitan
            area, with a population of 3.3 million.
          </p>
          <a
            href="http://visitmanchester.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.comewalkwithme.com.au/wp-content/uploads/2017/04/Photo-4_1-People-Make-Glasgow.jpg"
          alt="Glasgow City"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>Glasgow</h2>
          <p>
            Glasgow is the most populous city in Scotland and the fourth-most
            populous city in the United Kingdom, as well as being the 27th
            largest city by population in Europe. In 2020, it had an estimated
            population of 635,640.{" "}
          </p>
          <a
            href="http://peoplemakeglasgow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>{" "}
    </div>
  );
};
export default TouristInfoCards;
