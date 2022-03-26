import React from "react";

const TouristInfoCards = () => {
  const places = [
    {
      name: "Manchester",
      link: "visitmanchester.com",
      image:
        "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fstatic.thenounproject.com%2Fpng%2F709365-200.png&sp=1648156647Tc0b687e3e156317cad7685c5a3c0b5ed75e2a46d7a7b797fba6ab3634269a7c6"
    },
    {
      name: "Glasgow",
      link: "peoplemakeglasgow.com",
      image:
        "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fstatic.thenounproject.com%2Fpng%2F531680-200.png&sp=1648156754Tfa03d75b24ecff0a705593d36e0fd7bc8d696c01121fd83560d1a707f58d718c"
    },
    {
      name: "London",
      link: "visitlondon.com",
      image:
        "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2264%2FPNG%2F512%2Flondon_big_ben_icon_140410.png&sp=1648156714Tc9d051a13118db254e62565c7d9a63085e65344f0379deb904fdbf5bccffc195"
    }
  ];

  return (
    <div className="cards">
      {places.map(placeObject => {
        return (
          <div className="card">
            <img src={`${placeObject.image}`} className="card-img-top" />
            <div className="card-body">
              <a
                href={`https://www.${placeObject.link}`}
                className="btn btn-primary"
              >
                Go somewhere like {placeObject.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
