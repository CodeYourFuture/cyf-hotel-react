import React from "react";

function TouristInfoCards() {
    return (
        <div class="row">
            <div class="card" >
                <img src="https://peoplemakeglasgow.com/images/Clydeside1.jpg" class="card-img-top" alt="Glaskow"/>
                    <div class="card-body">
                        <h5 class="card-title">Glaskow</h5>
                    <p class="card-text">Glasgow is one of Europe's most vibrant and dynamic cities, that's been voted the world's friendliest city.</p>
                        <a href="https://peoplemakeglasgow.com/" class="btn btn-primary">Go Glasgow</a>
                    </div>
     
            </div>        
            <div class="card" >
                <img src="https://www.visitmanchester.com/imageresizer/?image=%2Fdmsimgs%2Fchristmas-markets-at-albert-square_1__441639496.jpg&action=ProductDetailFullWidth2" class="card-img-top" alt="Manchester"/>          
                        <div class="card-body">
                            <h5 class="card-title">Manchester</h5>
                    <p class="card-text">Whether you’re seeking culture, nightlife, history, or just good fun, there are plenty of things to do in Manchester.</p>
                            <a href="https://visitmanchester" class="btn btn-primary">Go Manchester</a>
                        </div>
        
            </div>
            <div class="card" >
                <img src="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg" class="card-img-top" alt="London"/>        
                            <div class="card-body">
                                <h5 class="card-title">London</h5>
                    <p class="card-text">London is a diverse and exciting city with some of the world's best sights, attractions and activities. With so much to do, it's hard to narrow down the long list of reasons to visit, </p>
                                <a href="https://visitlondon.com" class="btn btn-primary">Go London</a>
                            </div>
             
            </div>
        </div>
      
        );
}

export default TouristInfoCards;