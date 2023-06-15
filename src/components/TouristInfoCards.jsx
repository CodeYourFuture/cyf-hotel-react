//import { Link } from "react-router-dom";
import React from "react";

function MyComponent() {
  const handleClick = () => {
    window.location.href = "https://www.visitlondon.com";
  };

  return <button onClick={handleClick} formTarget="_blank">Visit London</button>;
}

const TouristInfoCards = () => {
  return (
    <div className="card-group">
      <div className="card">
        <img
          src="https://cdn.shopify.com/s/files/1/0360/1045/products/glasgow-the-wooden-postcard-company-julia-gash-JG-08-GLASGOW-CARD_1024x1024@2x.jpg?v=1606376199"
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body">
          <h5 className="card-title">Glasgow</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <button>
            <a href="peoplemakeglasgow.com">Visit Glasgow</a>
          </button>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.shopify.com/s/files/1/0360/1045/products/manchester-the-wooden-postcard-company-julia-gash-JG-12-MANCHESTER_300x300.jpg?v=1606376190"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <h5 className="card-title">Manchester</h5>
          <p className="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <button>
            <a href="visitmanchester.com">Visit Manchester</a>
          </button>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.shopify.com/s/files/1/0360/1045/products/londonthewoodenpostcardcompanyjuliagash_360x.jpg?v=1606376219"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
{/*           <Link to="visitlondon.com">
            <button>Visit London</button>
          </Link> */}
          <MyComponent />
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
