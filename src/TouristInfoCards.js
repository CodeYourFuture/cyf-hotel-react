import React from "react";
const cities = [
  {
    name: "Glasgow",
    description: `From independent stores to high street retailers, Glasgow is the best shopping city. Glasgow's city centre is home to flagship stores, impressive shopping centres and designer favourites all within an easily walkable area. The city is also rich in artists and creators which makes for a thriving and exciting independent shopping scene.`,
    image:
      "https://www.tripsavvy.com/thmb/jYQJvMwUJ_UMWcAPHOscWbcGL4c=/375x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/DSC_0006-5c7eaa6246e0fb00019b8e76.jpg",
    imageDesc: "Glasgow",
    link: "http://www.peoplemakeglasgow.com"
  },
  {
    name: "Manchester",
    description: `Whatever brings you to Manchester, Visit Manchester is here to make sure that you get the most out of your trip. When you’re in the city, make sure to drop by our Visitor Information Centre. Here you can get tourist information on how to best shape your visit, as well as maps, merchandise and discounted tickets to some of the most popular attractions and tourist spots. `,
    image:
      "https://www.tripsavvy.com/thmb/Ielrx3krKZgLitvsIXagyU9Lojc=/375x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/95722429-56a42b975f9b58b7d0d5b8f8.jpg",
    imageDesc: "Manchester",
    link: "http://www.visitmanchester.com"
  },
  {
    name: "London",
    description: `Welcome to London! Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events. If you’re not able to visit just yet, plan ahead to make the most of your next visit.`,
    image:
      "https://www.tripsavvy.com/thmb/QNWxw_GQDiuqb_ifNNFwQbnPFYo=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/GettyImages-590461497-580e473e3df78c2c736741f7.jpg",
    imageDesc: "London Thames River",
    link: "http://www.visitlondon.com"
  }
];

const TouristInfoCards = () => (
  <div className="card-deck p-5">
    {cities.map((city, index) => (
      <div key={index} className="card">
        <>
          <img src={city.image} alt={city.imageDesc} className="card-img-top" />
          <div className="card-body">
            <p className="card-text">{city.description}</p>
            <a href={city.link} className="btn btn-secondary" target="window">
              More Information
            </a>
          </div>
        </>
      </div>
    ))}
  </div>
);

export default TouristInfoCards;
