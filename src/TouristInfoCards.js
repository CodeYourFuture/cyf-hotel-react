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
    <div className="row">
      <div className="col-sm-4">
        <TouristInfoCard
          img={
            "https://www.scotsman.com/images-e.jpimedia.uk/imagefetch/http://www.scotsman.com/webimage/Prestige.Item.1.83448117!image/image.jpg"
          }
          link={"https://www.peoplemakeglasgow.com"}
          city={"Glasgow"}
        />
      </div>
      <div class="col-sm-4">
        <TouristInfoCard
          img={
            "https://www.visitmanchester.com/imageresizer/?image=%2fdmsimgs%2fchristmas-markets-at-albert-square_1__441639496.jpg&action=ProductDetailFullWidth2"
          }
          link={"https://www.visitmanchester.com"}
          city={"Manchester"}
        />
      </div>
      <div class="col-sm-4">
        <TouristInfoCard
          img={
            "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
          }
          link={"https://www.visitmanchester.com"}
          city={"London"}
        />
      </div>
    </div>
  );
};

export default TouristInfoCards;
