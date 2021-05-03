import React from "react";

const TouristInfoCards = () => {
  let cardInfo = [
    {
      image:
        "https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/glasgow_clyde_arc_vb34161123.jpg",
      summary:
        "Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding",

      city: "Glasgow",
      link: "https://peoplemakeglasgow.com/",
      visit: "Visit Glasgow"
    },
    {
      image:
        "https://u2g4c8y3.stackpathcdn.com/wp-content/uploads/2018/12/Manchester-Scalp-Micropigmentation.jpg",
      summary:
        "Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry",
      city: "Manchester",
      link: "https://www.visitmanchester.com/",
      visit: "Visit Manchester"
    },
    {
      image:
        "https://d2brulbsscz39x.cloudfront.net/_imager/files/22442/Film-London-Brochure-2019-COVER-IMAGE_e43a930512f2eb464a3e473409a450a9.jpg",
      summary:
        "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations",
      city: "London",
      link: "https://www.visitlondon.com/",
      visit: "Visit London"
    }
  ];
  return (
    <div className="all-cards">
      {cardInfo.map(info => {
        return (
          <div className="card">
            <h2 className="city-title">{info.city}</h2>
            <img src={info.image} className="card-img-top" alt="" />
            <div className="card-body">
              <p>{info.summary}</p>
              <a href={info.link} className="btn btn-success">
                {info.visit}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TouristInfoCards;
