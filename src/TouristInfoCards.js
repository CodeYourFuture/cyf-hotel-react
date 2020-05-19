import React from "react";

const TouristInfoCards = () => {
  const cardN = [
    {
      City: "Glasgow",
      web: "html://www.peoplemakeglasgow.com",
      Pic:
        "https://www.clydeco.com/images/made/uploads/Images/New_sector_images/Pages/Offices/glasgow_800_560_90_s_c1_c_c.jpg"
    },
    {
      City: "Manchester",
      web: "html://www.visitmanchester.com",
      pic:
        "https://www.shoosmiths.co.uk/-/media/images/locations/manchester.jpg"
    },
    {
      City: "London",
      web: "html://www.visitlondon.com",
      pic:
        "https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg"
    }
  ];
  cardN.map((Element, index) => {
    return (
      <div className="card">
        <img src={cardN[2].pic} className="card-img-top" />
        <div className="card-body">
          <a href={cardN[1].web} className="btn btn-primary">
            Go {cardN[1].City}
          </a>
        </div>
      </div>
    );
  });
};

export default TouristInfoCards;
// const TouristInfoCards = () => {
//     console.log(cardN.length);
//     cardN.map((element , index) => {
//         console.log(element , index + " element , index ");
//       return (
//         <div className="card">
// 	        <img src="https://image.flaticon.com/icons/svg/139/139899.svg" className="card-img-top" />
// 	        <div className="card-body">
//             <p key = {index} > {element.City} </p>
// 		<a key = {index} href= {element.web} className="btn btn-primary">Go somewhere</a>
// 	        </div>
//         </div>
//         )}
//     );
// }
