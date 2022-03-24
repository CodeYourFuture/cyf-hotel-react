import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards-align">
      <>
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSN01N3a6nEb6l08tyI3mno-35NpBQCzoy2A&usqp=CAU"
            className="card-img-top"
            alt="Glasgow"
          />
          <div className="card-body">
            <a
              href="https://peoplemakeglasgow.com/"
              className="btn btn-primary"
            >
              Visit Glasgow
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbn9JQu1uXaVXEI0kwz-BwK2kjgQqhFxDKA&usqp=CAU"
            className="card-img-top"
            alt="Manchester"
          />
          <div className="card-body">
            <a
              href="https://www.visitmanchester.com/"
              className="btn btn-primary"
            >
              Visit Manchester
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://media.istockphoto.com/photos/aerial-view-of-london-and-the-tower-bridge-picture-id1265900812?k=20&m=1265900812&s=612x612&w=0&h=gDUeVw65Hd8w1Yk0pE9Fbj27vfO20CgSNI03mvx2UDM="
            className="card-img-top"
            alt="London"
          />
          <div className="card-body">
            <a href="https://visitlondon.com/" className="btn btn-primary">
              Visit London
            </a>
          </div>
        </div>
      </>
    </div>
  );
};

export default TouristInfoCards;

// const TouristInfoCards = () => {
//     const places = [{name: "Manchester", link:"https://www.visitmanchester.com/", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbn9JQu1uXaVXEI0kwz-BwK2kjgQqhFxDKA&usqp=CAU"},
//                     {name: "Glasgow", link:"https://peoplemakeglasgow.com/", img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSN01N3a6nEb6l08tyI3mno-35NpBQCzoy2A&usqp=CAU"},
//                     {name: "London", link:"https://visitlondon.com/", img: "https://media.istockphoto.com/photos/aerial-view-of-london-and-the-tower-bridge-picture-id1265900812?k=20&m=1265900812&s=612x612&w=0&h=gDUeVw65Hd8w1Yk0pE9Fbj27vfO20CgSNI03mvx2UDM="}];

//     return (
//         <div>
//             {places.map((placeObject) =>{
//                 return (
//                     <div className="cards-align">
//                         <div className="card">
//  	                <img src={`https://www.${placeObject.img}`} className="card-img-top" />
//  	                <div className="card-body">
//  		            <a href={`https://www.${placeObject.link}`} className="btn btn-primary">
//                          Visit {placeObject.name}</a>
//                     </div>
//  	            </div>
//              </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default TouristInfoCards;
