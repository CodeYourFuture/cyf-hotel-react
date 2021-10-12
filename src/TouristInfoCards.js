import React from "react";

const TouristInfoCard = () => {
  const cardsinfo = [
    {
      city: "Glasgow",
      image:
        " https://api.wearehomesforstudents.com/wp-content/uploads/2021/09/glasgow.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      href: "https://peoplemakeglasgow.com/"
    },
    {
      city: "London",
      image:
        " https://static.amazon.jobs/locations/16/thumbnails/london-thumb.jpg?1617639578",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      href: "https://www.visitlondon.com/"
    },
    {
      city: "Manchester",
      image:
        "https://images.unsplash.com/photo-1560352642-d19964cf73ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      href: "https://www.visitmanchester.com/"
    }
  ];
  return (
    <div className="tourist-info-cards">
      {cardsinfo.map((cardcityinfo, index) => (
        <div className="card" key={index}>
          <img class="cityimage" src={cardcityinfo.image} alt="" />
          <h2> {cardcityinfo.city}</h2>
          <p> {cardcityinfo.description}</p>
          <a href={cardcityinfo.href} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      ))}
    </div>
  );
};
export default TouristInfoCard;
