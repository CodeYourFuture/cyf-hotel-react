import React from "react";

const TouristInfoCards = () => {
  let cities = [
    {
      name: "Manchester",
      link: "https://www.visitmanchester.com",
      image:
        "https://www.centreforcities.org/wp-content/uploads/2014/08/Manchester_x1650-1630x899.jpg"
    },
    {
      name: "Glasgow",
      link: "https://www.peoplemakeglasgow.com",
      image:
        "https://media.istockphoto.com/photos/squinty-bridge-glasgow-picture-id469974825?k=20&m=469974825&s=612x612&w=0&h=SHYq92xjEKGDNZU1sVBnhQJKsTtujh7vv-psQ_zCNyw="
    },
    {
      name: "London",
      link: "https://www.visitlondon.com",
      image:
        "https://cdn.londonandpartners.com/-/media/images/london/visit/general-london/towerbridgecopyrightvisitlondoncomantoinebuchet.jpg?mw=1920&hash=B6672601055B38B34C592E0160B0445AA063B876"
    }
  ];
  return (
    <div class="cardcontainer">
      {cities.map(cities => {
        return (
          <div className="card">
            <img src={cities.image} alt="city" className="card-img-top" />
            <div className="card-body">
              <a href={cities.link} className="btn btn-primary">
                Go somewhere like {cities.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
