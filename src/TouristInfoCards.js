import React from "react";
const TouristInfoCards = () => {
  return (
    <div className="cardComponent">
      <div className="card">
        <img
          src="https://peoplemakeglasgow.com/imager/general/169082/High-Street-Shopping-Buchanan-Street-Content-Block_8dc3bdbc8660ad389ec95cdf9b15d797.jpg"
          className="card-img-top"
          alt=""
        />
        <div>
          <h5>People Make Glasgow</h5>
          <p>
            In Glasgow city centre, there are huge pieces of art adorning some
            of the city's buildings which form the City Centre Mural Trail.
            Discover where you can find these vibrant splashes of colour.
          </p>
        </div>
        <div className="card-body">
          <button>
            <a href="https://www.peoplemakeglasgow.com">People Make Glasgow </a>
          </button>
        </div>
      </div>
      <div className="card">
        <img
          src="https://d2ypx7z26wj4u5.cloudfront.net/iondigi/wp-content/uploads/2016/04/30172540/Fotolia_78727861_Subscription_XXL-1024x577.jpg"
          className="card-img-top"
          alt=""
        />
        <div>
          <h4>Manchester</h4>
          <p>
            Known throughout the world as the birthplace of the industrial
            revolution, Manchester has a proud history in science, politics,
            music, arts and sport. And today the city combines this heritage
            with a progressive vision to be a city that delivers surprise and
            delight in equal measures.
          </p>
        </div>
        <div className="card-body">
          <button>
            <a href="https://www.visitmanchester.com">Visit Manchester </a>
          </button>
        </div>
      </div>
      <div className="card">
        <img
          src="https://media.gettyimages.com/photos/london-uk-tower-bridge-at-river-thames-sunset-twilight-scene-picture-id155278925?s=2048x2048"
          className="card-img-top"
          alt=""
        />
        <div>
          <h5>London</h5>
          <p>
            Welcome to London! Discover the best of London with Visit London,
            the official guide to England’s exciting capital. Find things to do
            in London, from iconic sightseeing spots and fun-filled days out to
            top restaurants, theatre and unmissable London events. If you’re not
            able to visit just yet, plan ahead to make the most of your next
            visit.
          </p>
        </div>
        <div className="card-body">
          <button>
            <a href="https://www.visitlondon.com">Visit London </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
