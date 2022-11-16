import React from "react";

const TouristInfoCards = props => {
  return (
    <>
      <div className="d-flex justify-content-center flex-row">
        {props.hotelsProp.map((hotel, index) => (
          <div className="card shadow m-2 mt-5">
            <img src={hotel.img} className="card-img-top" alt="hotel" />
            <div className="card-body">
              <h5 className="card-title">{hotel.title}</h5>
              <p className="card-text">{hotel.cityInfo}</p>
              <a
                href={hotel.touristInfo}
                target="_blank"
                className="btn btn-primary"
              >
                More Information
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="card m-2 mt-5">
        <img src={props.hotelProp.img} className="card-img-top" alt="" />  
    <div className="card-body">
      <h5 className="card-title">{props.hotelProp.title}</h5>
      <p className="card-text">{props.hotelProp.cityInfo}</p>
      <a href={props.hotelProp.touristInfo} target="_blank" className="btn btn-primary">More Information</a>
    </div>
  </div> */}

      {/* <div style={{ background:"red", border: "black"}}>
        <h1>{props.hotel.title}</h1>
        <a href={props.hotel.link}>Link</a>
        <img style={{width: "60px", height: "auto"}} src={props.hotel.linkPhoto}/>
    </div> */}
    </>
  );
};

export default TouristInfoCards;
