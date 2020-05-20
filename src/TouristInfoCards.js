import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5UJXnzoIfjqkqg3higrlaxdyL_NSybHvgjWPLRw3Cgh_XESi4&usqp=CAU"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://peoplemakeglasgow.com/"
            target="_blank"
            className="btn btn-primary"
            rel="noopener noreferrer"
          >
            Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHN5AORl_197n6KgEh-1Ag8yloH5K-ZKhNd4WH5oyx8l-uiMpI&usqp=CAU"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            className="btn btn-primary"
            rel="noopener noreferrer"
          >
            Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAgxTbFgQU4B0gmCKMEu4tYqcJW4dbfcMfKWoIVPrndqztfI4Q&usqp=CAU"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://visitlondon.com"
            target="_blank"
            className="btn btn-primary"
            rel="noopener noreferrer"
          >
            London
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
