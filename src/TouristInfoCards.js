import React from "react";

function TouristInfoCards() {
  const places = [
    {
      name: "glasgow",
      link: "peoplemakeglasgow.com",
      alt: "glasgow",
      img:
        "https://images.unsplash.com/photo-1571494146906-86de15d3817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2xhc2dvd3xlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
      name: "manchester",
      link: "visitmanchester.com",
      alt: "manchester",
      img:
        "https://www.crosscountrytrains.co.uk//media/3432/manchester-fountains.jpg"
    },
    {
      name: "london",
      link: "visitlondon.com",
      alt: "london",
      img:
        " https://media.istockphoto.com/photos/london-symbols-with-big-ben-double-decker-buses-and-red-phone-booth-picture-id1294454411?b=1&k=20&m=1294454411&s=170667a&w=0&h=UOVuoyqF8H9J3Q5u-HxrWQFRQVQnGgcoF_L8SVbhxQQ="
    }
  ];
  return (
    <div className="all-card">
      {places.map(placeObject => {
        return (
          <div className="card">
            <img
              src={placeObject.img}
              className="card-img-top"
              alt={placeObject.alt}
            />
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
}

export default TouristInfoCards;
