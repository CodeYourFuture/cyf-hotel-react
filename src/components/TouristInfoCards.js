import React from "react";
// import Button from "./components/Button";
// import { Button } from " ./components";

const TouristInfoCards = () => {
  return (
    // wrapper for the cards
    <div className="Tourist-Cards p-5">
      {/* card 1 */}
      <div className="card">
        <img
          src="https://media.istockphoto.com/photos/london-the-uk-red-buses-and-big-ben-the-palace-of-westminster-black-picture-id693802176?k=20&m=693802176&s=612x612&w=0&h=oe-2kyLVVbdNMlMaJ4YxmeXs2AD8mGJ1wLnGTJ0RdJ4="
          alt="London"
        />
        <h3> London </h3>
        <p>some gorgeous text about some fav place</p>

        <button className="Btn">
          {" "}
          <a href="https://www.visitlondon.com/" target="window">
            More Info{" "}
          </a>
        </button>
      </div>

      {/* card 2 */}
      <div className="card">
        <img
          src="https://images.fineartamerica.com/images-medium-large-5/merchant-city-glasgow-john-farnan.jpg"
          alt="London"
          //   Merchant City Glasgow Photograph by John Farnan  https://pixels.com/featured/merchant-city-glasgow-john-farnan.html
        />
        <h3>Glasgow </h3>
        <p>some gorgeous text about some fav place</p>

        <button className="Btn">
          {" "}
          <a href="https://peoplemakeglasgow.com/" target="window">
            More Info{" "}
          </a>
        </button>
      </div>

      {/* card 3 */}
      <div className="card">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5b5f6cc4cef372b2c114e5fd/1547560777806-7XKBZI733HT9LY6NVGLJ/Perry+M.+Anderson+-+Manchester+.jpg"
          alt="London"
          // Manchester, UK  by Perry M Anderson https://www.perryanderson.global/event/learn-to-acquire-a-business-without-using-any-of-your-own-capital-manchester-september
        />
        <h3>Manchester </h3>
        <p>some gorgeous text about some fav place</p>

        <button className="Btn">
          {" "}
          <a href="https://www.visitmanchester.com/" target="window">
            More Info{" "}
          </a>
        </button>
      </div>
    </div>
  );
};

export default TouristInfoCards;
// https://picsum.photos/200/150
