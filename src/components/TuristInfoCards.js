import React from "react";

const cards = [
  {
    link: `https://peoplemakeglasgow.com/`,
    name: "Glasgow",
    linkImg:
      "https://peoplemakeglasgow.com/imager/general/76609/West-end-Kelvingrove-Art-Gallery-Content-Block_11e6b377409ad0b26f1269c19e5bbf18.jpg"
  },
  {
    link: `https://www.visitmanchester.com/`,
    name: "Manchester",
    linkImg:
      "https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2Fcastlefield%287%29.jpg&action=FeaturedItems1x1"
  },
  {
    link: `https://visitlondon.com/`,
    name: "London",
    linkImg:
      "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?h=174&la=en&w=310&hash=7F9761B1BBC3F7C4BEA55059A1631DBED946E4AF"
  }
];

const TouristInfoCards = () => {
  const cardsJSX = cards.map((v, i) => {
    return (
      <div className="card" key={i}>
        <img src={v.linkImg} className="card-img-top" alt=" " />
        <div className="card-body">
          <a href={v.link} className="btn btn-primary">
            {v.name}
          </a>
        </div>
      </div>
    );
  });

  return <div className="flex">{cardsJSX}</div>;
};

export default TouristInfoCards;
