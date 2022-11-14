import React from "react";
import CityCard from "./CityCard";

const TouristInfoCards = () => {
  return (
    <div className="cardsHolder">
      <CityCard
        src="https://peoplemakeglasgow.com/imager/general/92335/Royal-Exchange-Square_8dc3bdbc8660ad389ec95cdf9b15d797.jpg"
        href="peoplemakeglasgow.com"
        CityName="GLasgow"
        Summary="Glasgow is a very walkable city, especially the city centre, so you can easily explore it on foot whilst taking in the beautiful buildings and architecture around you – don’t forget to 'look up' when you're in the city."
      />
      <CityCard
        src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2Fthe-university-of-manchester-min_1219152588.jpg&action=ProductDetailFullWidth2"
        href="https://www.visitmanchester.com/"
        CityName="Manchester"
        Summary="Known throughout the world as the birthplace of the industrial revolution, Manchester has a proud history in science, politics, music, arts and sport. And today the city combines this heritage with a progressive vision to be a city that delivers surprise and delight in equal measures. "
      />
      <CityCard
        src="https://cdn.londonandpartners.com/3/6c733d8/YXBwLnNoYXJpbnBpeC5jb20vaW1hZ2VfZXh0ZXJuYWxfdXJscy9jNGYwZThkYS0wNjgyLTQxMTMtODM4OC0wYjAyMTA4YzIwMTQ/c4f0e8da-0682-4113-8388-0b02108c2014.jpg"
        href="https://www.visitlondon.com/"
        CityName="London"
        Summary="From the modern London Eye to the historic Tower of London, the top 10 tourist attractions in London are a must-see on any London sightseeing trip. Even better, many London landmarks are free to visit. Use the London attractions map to find them all."
      />
    </div>
  );
};

export default TouristInfoCards;
