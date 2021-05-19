import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="Card-holder">
      <div className="Card-item">
        <img
          className="Card-item-image"
          src="/images/glasgow-right.jpg"
          alt="Glasgow"
        />
        <h1>Glasgow</h1>
        <p>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta.
        </p>
        <button className="Card-item-button">
          <a
            className="Card-item-link"
            href="https://peoplemakeglasgow.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            More Information
          </a>
        </button>
      </div>

      <div className="Card-item">
        <img
          className="Card-item-image"
          src="/images/manchester-right.jpg"
          alt="Manchester"
        />
        <h1>Manchester</h1>
        <p>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta..
        </p>
        <button className="Card-item-button">
          <a
            className="Card-item-link"
            href="https://www.visitmanchester.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            More Information
          </a>
        </button>
      </div>
      <div className="Card-item">
        <img
          className="Card-item-image"
          src="/images/london-right.jpg"
          alt="London"
        />
        <h1>London</h1>
        <p>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta.
        </p>
        <button className="Card-item-button">
          <a
            className="Card-item-link"
            href="https://www.visitlondon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            More Information
          </a>
        </button>
      </div>
    </div>
  );
};

export default TouristInfoCards;
