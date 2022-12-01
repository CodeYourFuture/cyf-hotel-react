import React from "react";
import CityCard from "./CityCard.js";

const TouristInfoCards = () => {
  return (
    <div className="cardsHolder">
      <CityCard
        src="https://cdn.londonandpartners.com/3/6c733d8/YXBwLnNoYXJpbnBpeC5jb20vaW1hZ2VfZXh0ZXJuYWxfdXJscy9jNGYwZThkYS0wNjgyLTQxMTMtODM4OC0wYjAyMTA4YzIwMTQ/c4f0e8da-0682-4113-8388-0b02108c2014.jpg"
        href="https://www.visitlondon.com/"
        CityName=<b>
          <i>London</i>
        </b>
        Description="London is the capital city of the United Kingdom. It is the U.K.'s largest metropolis and its economic, transportation, and cultural centre. London is also among the oldest of the world's great cities, with its history spanning nearly two millenniaand one of the most cosmopolitan. By far Britain’s largest metropolis, it is also the united kingdom's economic, transportation, and cultural centre."
      />
      <CityCard
        src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2Fthe-university-of-manchester-min_1219152588.jpg&action=ProductDetailFullWidth2"
        href="https://www.visitmanchester.com/"
        CityName=<b>
          <i>Manchester</i>
        </b>
        Description="Manchester is a city in North West England. In 2013 there were 514,417 people living there, which makes it the fifth largest city in the United Kingdom. Manchester is a very important city in England, and is often called the Capital of the North Manchester has many places for the arts, places for learning, businesses providing media as well as lots of shops. In a poll of British managers in 2006, Manchester was named the best place in Britain to have a business. A report in 2007 said Manchester is a fast-growing city (meaning lots of jobs are being created) Manchester was the host of the 2002 Commonwealth Games. It has two well-known football teams, Manchester United and Manchester City."
      />
      <CityCard
        src="https://peoplemakeglasgow.com/imager/general/92335/Royal-Exchange-Square_8dc3bdbc8660ad389ec95cdf9b15d797.jpg"
        href="https://www.peoplemakeglasgow.com"
        CityName=<b>
          <i>Glasgow</i>
        </b>
        Description="Glasgow is Scotland's largest city, and it forms an independent council area that lies entirely within the historic county of Lanarkshire. The city occupies much of the lower Clyde valley, and its suburbs extend into surrounding districts. Most important commercial and administrative buildings lie north of the Clyde. Glasgow is known for its trademark flair for design. It combines both old and new by being home to Europe's largest civic art collection and an edgy contemporary art scene. The city is packed with museums and galleries, many of which are free-to-visit, including the Gallery of Modern Art."
      />
    </div>
  );
};

export default TouristInfoCards;
