import React from "react"; 

function Heading() {//convert into a arrow function/no need now
    const appName = "Bay Hotel";
    return (
    <header>
      <h1 className="App-header">Welcome to {appName}</h1>
      <img class="main_image"
      src={"https://robbreport.com/wp-content/uploads/2018/03/73974092-h1-the_balmoral_facade.jpg?w=1000"}
      ></img>
    

    </header>
    );
    // <header className="App-header">CYF Hotel</header>;
}





export default Heading;