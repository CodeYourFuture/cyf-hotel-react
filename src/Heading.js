import React from "react";

const imgStyle={marginLeft: "467px"}
const Heading = ()=>{
  return (
    <>
      <header className="App-header">CYF Hotel</header>
       <img style={imgStyle}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40skdZ9V-nsN3t3X0niBbBqmHkcubEKSeNg&usqp=CAU"
        alt="Hotel"
      ></img> 
    </>
  );
};

export default Heading;