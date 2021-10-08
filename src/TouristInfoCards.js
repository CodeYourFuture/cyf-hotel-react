import React from "react";
import TouristInfoCard from "./TouristInfoCard";

const TouristInfoCards = () => {
  const cardsData = [
    {
      cityName: "Glasgow",
      imageUrl:
        "https://images.unsplash.com/photo-1571930999432-f8121f1da5ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      href: "https://peoplemakeglasgow.com/"
    },
    {
      cityName: "London",
      imageUrl:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      href: "https://www.visitlondon.com/"
    },
    {
      cityName: "Manchester",
      imageUrl:
        "https://images.unsplash.com/photo-1560352642-d19964cf73ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      href: "https://www.visitmanchester.com/"
    }
  ];
  return (
    <div className="tourist-info-cards">
      {cardsData.map((cardData, index) => (
        <TouristInfoCard
          key={index}
          cityName={cardData.cityName}
          imageUrl={cardData.imageUrl}
          description={cardData.description}
          href={cardData.href}
        />
      ))}
    </div>
  );
};
export default TouristInfoCards;
