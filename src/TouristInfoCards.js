import React from "react";

const datas = [
  {
    cardName: "Glasgow",
    text: "Glasgow is the largest city in Scotland, and third largest in the United Kingdom. Historically part of Lanarkshire, it is now one of the 32 Council Areas of Scotland. It is situated on the River Clyde in the country's West Central Lowlands. Inhabitants of the city are often referred to as Glaswegians or Weegies",
    src: "https://i2-prod.glasgowlive.co.uk/incoming/article15900403.ece/ALTERNATES/s1200c/1_Gavin-McCormick.jpg",
    href: "peoplemakeglasgow.com",
  },
  {
    cardName: "London",
    text: "London is the capital city of the United Kingdom. It is the U.K.'s gest metropolis and its economic transportation and culturallar centre. London is also among the oldest of the world's great cities,with its history spanning nearly two millennia.",
    src: "https://media.gettyimages.com/id/174726708/photo/london-big-ben-and-traffic-on-westminster-bridge.jpg?s=612x612&w=gi&k=20&c=lRk-qiRxj0Y_qYhLDcBSePJUV4yUaiBUuQi9uCRTXIg=",
    href: "visitlondon.com",
  },
  {
    cardName: "Manchester",
    text: "Manchester City adopted their sky blue home shirts in 1894, in the first season with the current name. Over the course of its history,the club has won nine league titles, seven FA Cups, eight League Cups,six FA Community Shields, and one European Cup Winners' Cup.",
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/ee/e8/the-famous-manchester.jpg?w=1200&h=-1&s=1",
    href: "https://www.visitmanchester.com"
  },
];
const TouristInfoCards = () => {
  return (
    <div className="cardMainDiv">
      {datas.map((data, index) => {
        return (
          <div className="card" key={index}>
            <img src={data.src} className="card-img-top" alt="" style={{height:"300px"}}/>
            <h1>{data.cardName}</h1>
            <p  className="pElementCard">{data.text}</p>
            <div className="card-body">
              <a href={data.href} className="btn btn-primary">
                More information
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};







 export default TouristInfoCards;




 





     
// try to for each
// const TouristInfoCards = (props) => {
//     return (
//        <div>
//           <div className="card">
//             <img src={props.src} className="card-img-top" />
//             <h1>{props.cardName}</h1>
//             <p>{props.text}</p>
//             <div className="card-body">
//               <a href="peoplemakeglasgow.com" className="btn btn-primary">
//                 More information
//               </a>
//             </div>
//           </div>
//        </div>
//           );
//          };
//  export default "TouristInfoCards";