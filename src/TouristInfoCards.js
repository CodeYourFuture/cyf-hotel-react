import React from "react";

const TouristInfoCards = () => {
  return (
    <div>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2019/02/16/18/23/pollock-4000724__340.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            target="_blank"
            href="https://peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/photos/castlefield-blue-hour-in-manchester-great-britain-picture-id1170725783?b=1&k=6&m=1170725783&s=170667a&w=0&h=SkLmyCU3sS9gCdX8ECdcyiU8IuDgTqWE9hbG52MWu2A="
          className="card-img-top"
        />
        <div className="card-body">
          <a
            target="_blank"
            href="https://visitmanchester.com"
            className="btn btn-primary"
          >
            Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            target="_blank"
            href="https://visitlondon.com"
            className="btn btn-primary"
          >
            London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
