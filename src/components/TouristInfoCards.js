import React from "react";
// import Button from "./components/Button";
// import { Button } from " ./components";

const TouristInfoCards = () => {
  return (
    // wrapper for the cards
    <div className="Tourist-Cards">
      {/* card 1 */}
      <div className="card ">
        <img
          className="card-img"
          src="https://media.istockphoto.com/photos/london-the-uk-red-buses-and-big-ben-the-palace-of-westminster-black-picture-id693802176?k=20&m=693802176&s=612x612&w=0&h=oe-2kyLVVbdNMlMaJ4YxmeXs2AD8mGJ1wLnGTJ0RdJ4="
          alt="London"
        />
        <h3> London </h3>
        <p>
          Welcome to London! Discover the best of London with Visit London, the
          official guide to England’s exciting capital. Find things to do in
          London, from iconic sightseeing spots and fun-filled days out to top
          restaurants, theatre and unmissable London events. If you’re not able
          to visit just yet, plan ahead to make the most.
        </p>

        <button className="Btn">
          {" "}
          <a href="https://www.visitlondon.com/" target="window">
            More Info{" "}
          </a>
        </button>
      </div>

      {/* card 2 */}
      <div className="card ">
        <img
          className="card-img"
          src="https://images.fineartamerica.com/images-medium-large-5/merchant-city-glasgow-john-farnan.jpg"
          alt="London"
          //   Merchant City Glasgow Photograph by John Farnan  https://pixels.com/featured/merchant-city-glasgow-john-farnan.html
        />
        <h3>Glasgow </h3>
        <p>
          Get a warm welcome to Glasgow by joining a city walking tour guided by
          friendly locals. Learn about street art, Charles Rennie Mackintosh and
          the highlights of the city centre with Walking Tours in Glasgow, or
          all about the city’s legendary music scene with Glasgow Music City
          Tours. Visit our tours page to find out more.
        </p>

        <button className="Btn">
          {" "}
          <a href="https://peoplemakeglasgow.com/" target="window">
            More Info{" "}
          </a>
        </button>
      </div>

      {/* card 3 */}
      <div className="card ">
        <img
          className="card-img"
          src="https://images.squarespace-cdn.com/content/v1/5b5f6cc4cef372b2c114e5fd/1547560777806-7XKBZI733HT9LY6NVGLJ/Perry+M.+Anderson+-+Manchester+.jpg"
          alt="London"
          // Manchester, UK  by Perry M Anderson https://www.perryanderson.global/event/learn-to-acquire-a-business-without-using-any-of-your-own-capital-manchester-september
        />
        <h3>Manchester </h3>
        <p>
          Welcome to the official tourism site of Greater Manchester where you
          can search for things to do in Manchester and find out what's on, as
          well as getting inspiration for your visit to this fantastic city
          region. Youthful, diverse, energetic and bursting with character;
          Manchester is one of the most exciting places to visit in the UK.
        </p>

        <button className="Btn">
          {" "}
          <a href="https://www.visitmanchester.com/" target="window">
            More Info{" "}
          </a>
        </button>
      </div>

      {/* card 4 */}
      {/* <div className="card">
        <img
          src="https://jamaicahotelreview.com/wp-content/uploads/2017/04/blue-lagoon-beauty-1.jpg"
          alt="Blue Lagoon"
        />
        <h3>Jamaica </h3>
        <p>
          The Blue Lagoon is a place to appreciate the greatness of Mother
          Nature while relaxing in a calm and refreshing atmosphere. Imagine
          floating on a bamboo raft atop a shimmering glass of intense azure
          waters, or drifting along on a leisurely boat ride, or even taking a
          swim in an inviting, natural water wonderland.
        </p>

        <button className="Btn">
          {" "}
          <a href="https://www.visitmanchester.com/" target="window">
            More Info{" "}
          </a>
        </button>
      </div> */}

      {/* end */}
    </div>
  );
};

export default TouristInfoCards;
// https://picsum.photos/200/150
