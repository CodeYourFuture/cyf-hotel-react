import React from "react";

const cities = [
  {
    name: "Glasgow",
    image:
      "https://media.istockphoto.com/photos/glasgow-city-skyline-from-kelvingrove-park-picture-id1211433221?s=612x612",
    link: "http://www.peoplemakeglasgow.com",
    description:
      "Discover your ultimate guide to Glasgow. From the best activities in the city to top restaurants, bars and hotels, explore Glasgow today."
  },
  {
    name: "Manchester",
    image:
      "https://media.istockphoto.com/photos/aerial-view-of-deansgate-manchester-skyline-england-uk-picture-id1331510377?s=612x612",
    link: "http://www.visitmanchester.com",
    description:
      "Discover your ultimate guide to Manchester. From the best activities in the city to top restaurants, bars and hotels, explore Manchester today."
  },
  {
    name: "London",
    image:
      "https://media.istockphoto.com/photos/the-tower-bridge-and-thames-river-at-sunset-in-london-uk-picture-id1320869019?s=612x612",
    link: "http://www.visitlondon.com",
    description:
      "Discover your ultimate guide to London. From the best activities in the city to top restaurants, bars and hotels, explore London today."
  }
];
const TouristInfoCards = () => {
  return (
    <div className="container">
      <div className="card-deck">
        {cities.map(data => {
          return (
            <div className="card">
              <img
                src={data.image}
                className="card-img-top"
                alt="cities image"
              />
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.description}</p>
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TouristInfoCards;

// #### 3. Create and use a new component to show info cards

// **Instructions:** In `src/App.js`, above the `<Bookings />` component add a new component called `TouristInfoCards` which shows 3 _cards_. A card is a common user interface pattern with an image at the top and some related text underneath.
// The cards must link to `peoplemakeglasgow.com`, `visitmanchester.com` and `visitlondon.com`. The cards should contain the name of the city and an image of the city. Here is an example of what an info card should look like:

// ![Info Card](InfoCard.png)

// **Hint:** Use the same className as the example below to benefit from [Bootstrap](https://getbootstrap.com/docs/4.2/components/card) library which is already imported for you in the project. Use the JSX code below as an example of one card (note that in JSX, you'll need to use `className` instead of `class`):

// ```
// <div className="card">
// 	<img src="..." className="card-img-top" />
// 	<div className="card-body">
// 		<a href="#" className="btn btn-primary">Go somewhere</a>
// 	</div>
// </div>
// ```

// **Test:** 3 info cards should be displayed on the page for each city (Glasgow, Manchester, London). Each card should link to the correct website.
