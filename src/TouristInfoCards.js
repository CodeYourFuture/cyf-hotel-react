/*Level 3  */

import React from "react";

const TouristInfoCards = () => {
  // TouristInfoCards
  return (
    /* JSX code that holds a div called section  and an article which holds card info */
    <div className="section">
      <article className="card">
        <h3>Manchester</h3>
        <img
          className="photo"
          src="https://www.visitmanchester.com/imageresizer/?image=%2fdmsimgs%2folympic-parade_1992645352.jpg&action=ProductDetailFullWidth2"
          alt="Manchester Town hall"
        />
        <p>
          Welcome to Manchester Town-Hall.Please visit manchester a city where
          you and your family will enjoy tourism.For more info please visit the
          link below:
        </p>
        <a href="www.visitmanchester.com" className="btn btn-primary">
          Visit Manchester
        </a>
      </article>

      <article className="card">
        <h3>London</h3>
        <img
          className="photo"
          src="https://cdn.londonandpartners.com/visit/generic/objects/91169-640x360-101-image-640.jpg"
          alt="London Big Ben"
        />
        <p>
          Welcome to London.Please visit London a city where you and your family
          will enjoy tourism.For more info please visit the link below:
        </p>
        <a href="www.visitlondon.com" className="btn btn-primary">
          Visit London
        </a>
      </article>

      <article className="card">
        <h3>Glasgow</h3>
        <img
          className="photo"
          src="https://www.gla.ac.uk/media/Media_537541_smxx.jpg"
          alt="Glasgow University"
        />
        <p>
          Welcome to Glasgow.Please visit Glasgow a city where you and your
          family will enjoy tourism and yummy Scottish breakfast.For more info
          please visit the link below:
        </p>
        <a href="www.peoplemakeglasgow.com" className="btn btn-primary">
          Visit Glasgow
        </a>
      </article>
    </div>
  );
};

export default TouristInfoCards;
