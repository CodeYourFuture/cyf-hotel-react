import React from "react";
import TouristInfoCards from "./TouristInfoCards";

const ListCards = () => {
  const cityUk = [
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHS56YNuaaY7IXR7iOa2ptlsAXaBNN0dvr-bEXgfxdsaVbmkYn&usqp=CAU",
      link: "https://peoplemakeglasgow.com",
      name: "Glasgow"
    },
    {
      imgUrl:
        "https://i2-prod.manchestereveningnews.co.uk/incoming/article17428679.ece/ALTERNATES/s615/1_MWOCT19-121051JPG.jpg",
      link: "https://visitmanchester.com",
      name: "Manchester"
    },
    {
      imgUrl:
        "https://d36tnp772eyphs.cloudfront.net/blogs/1/2011/05/London-England-Big-Ben-Cityscape-destinations-1200x900.jpg",
      link: "https://visitlondon.com",
      name: "London"
    }
  ];
  return (
    <div className="list-cards">
      {cityUk.map(city => (
        <TouristInfoCards {...city} />
      ))}
    </div>
  );
};
export default ListCards;
