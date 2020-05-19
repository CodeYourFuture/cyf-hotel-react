import React from "react";

const TouristInfoCards = props => {
  console.log(props);
  const infoRows = props.data.map((oneInfo, index) => {
    return (
      <div key={index} className="card">
        <img src={oneInfo.img} alt="img" className="card-img-top" />
        <div className="card-body">
          <a
            href={oneInfo.href}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            {oneInfo.place}
          </a>
        </div>
      </div>
    );
  });

  return <div className="card-control">{infoRows}</div>;
};
export default TouristInfoCards;
