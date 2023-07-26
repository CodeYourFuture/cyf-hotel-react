import React from "react";
import "./TouristInfoCards.css";

const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">
          More Information
        </a>
      </div>
    </div>
  );
};

function TouristInfoCards() {
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1632724442187-6f189af4d4d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Glasgow",
      description:
        "Glasgow is a vibrant city known for its rich history, cultural attractions, and lively music scene. Explore the stunning architecture, visit world-class museums, and enjoy the friendly atmosphere.",
      link: "https://www.peoplemakeglasgow.com/",
    },
    {
      image:
        "https://images.unsplash.com/photo-1605021149343-bb75d2a2fa44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Manchester",
      description:
        "Manchester is a vibrant city known for its thriving music and art scene, world-class football, and rich industrial heritage. Explore its diverse neighborhoods, visit iconic landmarks, and indulge in its renowned shopping and dining experiences.",
      link: "https://www.visitmanchester.com/",
    },
    {
      image:
        "https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "London",
      description:
        "London, the capital city of England, is a global hub of culture, history, and entertainment. Explore its iconic landmarks, including the Tower of London and Buckingham Palace. Immerse yourself in the diverse culinary scene, vibrant theater shows, and world-class museums.",
      link: "https://www.visitlondon.com/",
    },
  ];

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
}

export default TouristInfoCards;
