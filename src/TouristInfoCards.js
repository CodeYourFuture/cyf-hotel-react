import React from "react";

function TouristInfoCards() {
  const cityData = [
    {
      name: "Glasgow",
      href: "https://peoplemakeglasgow.com/",
      text: "The second biggest city in Scotland",
      thumbnail:
        "https://frontline-collections.com/wp-content/uploads/2018/02/Glasgow-Debt-Collection.jpg"
    },
    {
      name: "Manchester",
      href: "https://www.visitmanchester.com/",
      text: "The second biggest city in Scotland",
      thumbnail:
        "https://governmentbusiness.co.uk/sites/default/files/william-mccue-508892-unsplash_1.jpg"
    },
    {
      name: "London",
      href: "https://www.visitlondon.com/",
      text: "The second biggest city in Scotland",
      thumbnail:
        "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
    }
  ];
  return (
    <div className="cards">
      {cityData.map((data, index) => {
        return (
          <div className="card" key={index}>
            <img src={data.thumbnail} className="card-img-top" alt="" />
            <div className="card-body">
              <a href={data.href} className="btn btn-primary">
                {data.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TouristInfoCards;
