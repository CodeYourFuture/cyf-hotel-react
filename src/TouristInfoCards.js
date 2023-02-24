import React from "react";

const TouristInfoCards = (props) => {
  let imageURL = "";
  let infoCity = "";
  let link = "";
  function checkCity(city) {
    if (city === "Glasgow") {
      imageURL =
        "https://www.greatbritishbucketlist.com/wp-content/uploads/2021/04/glasgow-4-1024x682.jpg";
      infoCity =
        "Glasgow is a port city on the River Clyde in Scotland's western Lowlands. ";
      link = "http://peoplemakeglasgow.com/";
    } else if (city === "Manchester") {
      imageURL =
        "https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2Folympic-parade%20%281%29-min.jpg&action=BlogDetailContent";
      infoCity =
        "Manchester is a major city in the northwest of England with a rich industrial heritage.";
      link = "https://www.visitmanchester.com/";
    } else if (city === "London") {
      imageURL =
        "https://i.natgeofe.com/n/93231b5d-3b4f-4bd6-bcf4-4172ebda2011/parliment-square-london-england_3x2.jpg";
      infoCity =
        "It is the largest metropolis in the United Kingdom, and it is also the country's economic, transportation, and cultural centre.";
      link = "https://www.visitlondon.com/";
    }
  }
  checkCity(props.city);

  return (
    <div className="card">
      <img src={imageURL} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.city}</h5>
        <p className="card-text text-center">{infoCity}</p>
        <a href={link} target="_blank" className="btn btn-primary">
          More information
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
