import React, { Component } from "react";

export default class TouristInfoCards extends Component {
   state = {
      cards: [
         {
            link: "peoplemakeglasgow.com",
            src:
               "https://i2-prod.glasgowlive.co.uk/incoming/article11130566.ece/ALTERNATES/s615/GettyImages-140339251.jpg",
            title: "Glasgow City"
         },
         {
            link: "visitmanchester.com",
            src:
               "https://i2-prod.manchestereveningnews.co.uk/incoming/article15304230.ece/ALTERNATES/s615/30419_LRR_MEN_ManchesterSkylinejpeg.jpg",
            title: "Manchester City"
         },
         {
            link: "visitlondon.com",
            src:
               "https://secure.i.telegraph.co.uk/multimedia/archive/02423/london_2423609b.jpg",
            title: "London"
         }
      ]
   };
   render() {
      return (
         <div className="container">
            <div className="row d-flex justify-content-around">
               {this.state.cards.map((card, index) => {
                  return (
                     <div key={index} className="card ">
                        <img
                           src={card.src}
                           className="card-img-top"
                           alt={card.title}
                        />
                        <h5 className="card-title">{card.title}</h5>
                        <div className="card-body">
                           <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                           </p>
                           <a href={card.link} className="btn btn-primary">
                              Go {" " + card.title}
                           </a>
                        </div>
                     </div>
                  );
               })}
            </div>{" "}
         </div>
      );
   }
}
