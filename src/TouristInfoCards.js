import React from "react";
const TouristInfoCard = props => {
  return (
    <div className="card">
      <img src={props.img} alt={props.city} />
      <div className="card-body">
        <a href={props.link} className="btn btn-primary">
          Go to {props.city}
        </a>
      </div>
    </div>
  );
};

const TouristInfoCards = () => {
  return (
    <div className="">
      <div className="row">
        <div className="col-sm-3">
          <TouristInfoCard
            img={
              "https://i2.wp.com/batman-news.com/wp-content/uploads/2020/01/Shutterstock-Glasgow-Henning-Marquardt.jpg"
            }
            link={"https://www.peoplemakeglasgow.com"}
            city={"Glasgow"}
          />
        </div>
        <div className="col-sm-3">
          <TouristInfoCard
            img={
              "https://downtowninbusiness.com/wp-content/uploads/2018/05/Manchester-a-young-city.jpg"
            }
            link={"https://www.visitmanchester.com"}
            city={"Manchester"}
          />
        </div>
        <div className="col-sm-3">
          <TouristInfoCard
            img={
              "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
            }
            link={"https://www.visitmanchester.com"}
            city={"London"}
          />
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
