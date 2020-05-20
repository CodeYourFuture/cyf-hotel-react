import React from "react";

const TouristInfoCards = () => {
  const Cities = [
    {
      Title: "London",
      Image:
        "https://www.fodors.com/wp-content/uploads/2017/10/HERO_UltimateLondon_Hero_shutterstock412054315.jpg",
      Address: "https://www.visitlondon.com/",
      Description:
        "Whether you are visiting London for the first time or coming back for a special occasion, you’ll discover a city full of unforgettable landmarks and exciting things to do. There are London attractions waiting for you around every corner..."
    },
    {
      Title: "Manchester",
      Image:
        "https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2016/05/manchester-hero.jpg",
      Address: "https://www.visitmanchester.com/",
      Description:
        "Manchester city centre is jam-packed with unique and eclectic restaurants,bars,museums,hotels and places to stay whilst the surrounding Greater Manchester boroughs offer a patch-work of visitor experiences including quaint market towns,beautiful green spaces and ..."
    },
    {
      Title: "Glasgow",
      Image:
        "https://www.shoosmiths.co.uk/-/media/images/locations/glasgow.jpg",
      Address: "https://peoplemakeglasgow.com/",
      Description:
        "Glasgow Life delivers services on behalf of Glasgow City Council to both citizens and visitors to the city, providing opportunities through culture, sport and learning. Find out all the essential information for travelling to Glasgow for a holiday or vacation by rail, air, car, or by sea."
    }
  ];
  return (
    <div id="TouristInfoCards" className="TouristInfoCards_CSS">
      {Cities.map((City, index) => {
        return (
          <div className="card">
            <img src={City.Image} className="Image_CSS" />
            <div className="cardBody_CSS">
              <p className="Title_CSS" key={index}>
                Visit {City.Title}
              </p>
              <div className="Summary_Div_CSS">
                <p className="Description_CSS" key={index}>
                  {City.Description}
                </p>
              </div>
              <a href={City.Address} className="button_CSS" target="_blank">
                Go {City.Title}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TouristInfoCards;
