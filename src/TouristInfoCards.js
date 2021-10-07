import React from "react";
const TouristInfoCards = () => {
  return (
    <div className="cardComponent">
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2017/10/02/22/45/duke-2810646_960_720.jpg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <a href="https://www.peoplemakeglasgow.com">People Make Glasgow </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://d2ypx7z26wj4u5.cloudfront.net/iondigi/wp-content/uploads/2016/04/30172540/Fotolia_78727861_Subscription_XXL-1024x577.jpg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <a href="https://www.visitmanchester.com">Visit Manchester </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://media.gettyimages.com/photos/london-uk-tower-bridge-at-river-thames-sunset-twilight-scene-picture-id155278925?s=2048x2048"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <a href="https://www.visitlondon.com">Visit London </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
