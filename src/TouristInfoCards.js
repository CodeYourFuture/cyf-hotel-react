import React from "react";
import "./css/TouristInfoCards.css";
import londonPic from "./images/ london-web.jpg";
import glasgowPic from "./images/glasgow-web.jpg";
import manchesterPic from "./images/manchester_web.jpg";

const TouristInfoCard = props => {
  //console.log(props);

  // clickRedirect: function() {
  //   // window.location = this.props.cityLink;
  //   // alert(link);
  //   console.log(this.props);
  //   //return "";
  // }
  // onClick={this.clickRedirect("test")}

  return (
    <div className="card">
      <img src={props.cityPic} className="card-img-top" alt={props.cityName} />
      <div className="card-body">
        <br />
        <a href={props.cityLink} className="btn btn-primary btn-block">
          {props.cityName}
        </a>
      </div>
    </div>
  );
};

const TouristInfoCards = () => {
  return (
    <div className="row">
      <div className="col-4">
        <TouristInfoCard
          cityName={"London"}
          cityLink={"http://visitlondon.com"}
          cityPic={londonPic}
        />
      </div>
      <div className="col-4">
        <TouristInfoCard
          cityName={"Glasgow"}
          cityLink={"http://peoplemakeglasgow.com"}
          cityPic={glasgowPic}
        />
      </div>
      <div className="col-4">
        <TouristInfoCard
          cityName={"Manchester"}
          cityLink={"http://visitmanchester.com"}
          cityPic={manchesterPic}
        />
      </div>
    </div>
  );
};

export default TouristInfoCards;
