import React from "react";

const cityInfo = {
  glasgow: {
    title: "Glasgow",
    link: "https://peoplemakeglasgow.com/",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
    imgSrc:
      "https://images.unsplash.com/photo-1611842525094-cd40da298560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  manchester: {
    title: "Manchester",
    link: "https://www.visitmanchester.com/",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
    imgSrc:
      "https://images.unsplash.com/photo-1588934375041-0478480ae4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2141&q=80"
  },
  london: {
    title: "London",
    link: "https://visitlondon.com/",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
    imgSrc:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
};

const TouristInfoCards = () => {
  return (
    <div className="card-wrapper">
      {Object.keys(cityInfo).map((city, ind) => {
        return (
          <div className="card" key={ind}>
            <img
              src={cityInfo[city].imgSrc}
              alt="city in the day"
              className="card-img-top"
            />
            <div className="card-body">
              <h1>{cityInfo[city].title}</h1>
              <p>{cityInfo[city].desc}</p>
              <a
                href={cityInfo[city].link}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                More Info
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
