import React from "react";

const TouristInfoCards = () => {
  const cities = [
    {
      name: "London",
      image:
        "https://www.planetware.com/wpimages/2023/01/england-london-best-time-to-visit-intro-paragraph-tower-bridge-shard.jpg",
      website: "https://www.visitlondon.com/",
      summary:
        "London is the capital city of England and the United Kingdom. It is one of the world's most important cultural, financial, and political centers, and is home to a population of over 8 million people."
    },
    {
      name: "Manchester",
      image:
        "https://wordpress-network.prod.aws.skyscnr.com/wp-content/uploads/2018/05/GettyImages-177315799.jpg",
      website: "https://www.visitmanchester.com/",
      summary:
        "Manchester is a city in the northwest of England, with a population of over 500,000 people. It is known for its rich industrial heritage, as well as its vibrant culture and music scene."
    },
    {
      name: "Glasgow",
      image:
        "https://media.istockphoto.com/id/177517362/photo/illuminated-squinty-bridge-crossing-the-river-clyde-glasgow-scotland.jpg?s=612x612&w=0&k=20&c=2EOY7Kw0zNZkUud9PIyCmrWQZT3aeT36Ntc-x_I2Wnw=",
      website: "https://peoplemakeglasgow.com/",
      summary:
        "Glasgow is a city in Scotland, located in the west central lowlands of the country. It is the largest city in Scotland and the fourth largest in the United Kingdom, with a population of over 600,000 people."
    }
  ];
  return (
    <div className="cards-box">
      {cities.map(({ image, name, summary, website }) => (
        <div className="card">
          <img src={image} className="card-img-top" alt={name} />
          <div className="card-body">
            <h3>{name}</h3>
            <p>{summary}</p>
            <a href={website} className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
