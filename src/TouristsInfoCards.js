import React from "react";

function TouristsInfoCards() {
  let glasgow = {
    name: "Glasgow",
    img:
      "https://media.istockphoto.com/photos/squinty-bridge-glasgow-picture-id469974825?k=20&m=469974825&s=612x612&w=0&h=SHYq92xjEKGDNZU1sVBnhQJKsTtujh7vv-psQ_zCNyw=",
    site: "peoplemakeglasgow.com"
  };
  let manchester = {
    name: "Manchester",
    img:
      "https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2Fcornexchange_656605769.jpg&action=FeaturedItems1x1",
    site: "visitmanchester.com"
  };
  let london = {
    name: "London",
    img:
      "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?h=174&la=en&w=310&hash=5924A0962E7B4B996062FC1F715225366AC47CC0",
    site: "visitlondon.com"
  };
  let cities = [glasgow, london, manchester];

  return (
    <div>
      {cities.map(city => (
        <div className="card" style={{ width: 18 + "rem" }}>
          <img className="card-img-top" src={city.img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{city.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href={city.site} className="btn btn-primary" target="_blank">
              More information
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TouristsInfoCards;
