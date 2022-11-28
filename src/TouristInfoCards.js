import React from "react";
import CardCity from "./CardCity";

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <CardCity
        src="https://tinyurl.com/bdddammd"
        href="peoplemakeglasgow.com"
        CityName="Glasgow"
        Summary="Glasgow is the largest city in scotland, it has lot to offer visiting tourists. it is green and beautiful city. this city is famous around the world for its art"
      />
      <CardCity
        src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FOlympic%20Parade%20nav.jpg&action=FeaturedItems3x2"
        href="visitmanchester.com"
        CityName="Manchester"
        Summary="Manchester is famous for being the first industrialised city in the world. Manchester was responsible for the country's first ever working canal in 1761."
      />
      <CardCity
        src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/tower-bridge-shutterstock640x360.jpg?la=en&hash=E52A26BC72DAD9058E8C0ED6A1ACF83438124CC8"
        href="visitlondon.com"
        CityName="London"
        Summary="London is the capital of United Kingdom of Great Britain and North Ireland.london is multicultural, bustling and vibrant.London is famous for Big ben and Tower bridge. "
      />
    </div>
  );
};
export default TouristInfoCards;
