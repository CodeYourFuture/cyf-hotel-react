import React from "react";

const TouristInfoCard = (props) => {
  return (
    <div className="card">
      <img
        src={`../images/${props.image}`}
        alt={TouristInfoCard}
        className="card-img-top"
      />
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
        <a href={props.link} className="btn btn-primary" target="_blank">
          More Information
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCard;

// The code imports the React library, which is necessary for writing React components. The TouristInfoCard component
// is defined as an arrow function that accepts props as a parameter. Inside the function, a card is rendered using JSX.
// The img tag displays an image. The src attribute is dynamically set using the props.image value. The alt attribute
// is set to the string "TouristInfoCard". The div with the class name "card-body" contains the title, description,
// and link. The title is rendered using the props.title value. The description is rendered using the props.description
// value. The link is rendered as an anchor (a) tag. The href attribute is set to props.link, which should be a URL.
// The target attribute is set to "_blank" to open the link in a new tab or window. The content of the anchor tag is
// the string "More Information". The TouristInfoCard component is exported as the default export of this file, which
// means it can be imported and used in other files.