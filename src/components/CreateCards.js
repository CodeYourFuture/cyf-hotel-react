import React from "react";

function CreateCards(props) {
  return (
    <div className="container">
      {props.cardInfo.map((data, index) => {
        return (
          <div key={index} className="container">
            <div className="card">
              <img alt="" src={data.image} className="card-img-top" />
              <div className="card-body">
                <a href={data.link} className="btn btn-primary">
                  Go somewhere
                </a>
                <p>{data.summary}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CreateCards;
