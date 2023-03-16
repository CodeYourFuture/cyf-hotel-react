import React from "react";

function InfoCards() {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://a.cdn-hotels.com/gdcs/production95/d16/cc514640-8f0f-11e8-9bad-0242ac110002.jpg"
          className="card-img-top"
        />

        <div className="card-body">
          <h3>
            <u>Glasgow</u>
          </h3>

          <p>
            Glasgow is Scotland's largest city with a population of 600,000
            people. Despite often being overshadowed by Edinburgh, Scotland's
            capital city, Glasgow is the cultural capital of Scotland.
          </p>
          <br />
          <br />
          <a
            href="http://peoplemakeglasgow.com/"
            target="_blank"
            className="btn btn-primary visit-city"
          >
            Visit Glasgow{" "}
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://img.freepik.com/premium-photo/salford-england-october-10-202-lights-manchester-ship-canal-night-view-manchester-business-center-city-lights_536604-1490.jpg?size=626&ext=jpg&ga=GA1.2.1956754729.1673551638&semt=sph"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h3>
            <u>Manchester</u>
          </h3>
          <p>
            Manchester has a rich history in engineering, sport and cinema.
            Manchester is the birthplace of the industrial revolution, the city
            where Rolls-Royce was founded as well as where the TV show the Peaky
            Blinders was filmed.
          </p>

          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            className="btn btn-primary visit-city"
          >
            Visit Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://img.freepik.com/premium-photo/tower-bridge-bright-sunny-day-autumn_87646-3909.jpg?size=626&ext=jpg&ga=GA1.2.1956754729.1673551638&semt=sph"
          className="card-img-top"
        />

        <div className="card-body">
          <h3>
            <u>London</u>
          </h3>

          <p>
            London is the capital city of the United Kingdom as well its
            smallest city. London is a cultural hub, with over 300 languages
            being spoken in the city.
          </p>
          <br />
          <br />
          <br />
          <a
            href="https://www.visitlondon.com/"
            target="_blank"
            className="btn btn-primary visit-city"
          >
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
