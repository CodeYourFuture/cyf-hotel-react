import React from "react";
const Heading = () => {
    const name = "CYF HOTEL"
    return <header className="App-header">
    <div><img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMiyT0CsbbuRmEjXFYugoingNpNK51BhAOtg&usqp=CAU" className = "logo"alt = "hotel-logo"></img></div>
    <div><h2>{name}</h2></div>
</header>
}

export default Heading;