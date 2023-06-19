import React from "react";

const TouristInfoCards = () => {

    return (
        <div class="cards-container">
            <div class="card">
                <img
                    src="https://peoplemakeglasgow.com/imager/general/86786/Kelvingrove-Art-Gallery-and-Museum_8dc3bdbc8660ad389ec95cdf9b15d797.jpg"
                    class="card-img-top"
                    alt="Picture of Glasgow"
                />
                <div class="card-body">
                    <h5 class="card-title">Glasgow</h5>
                    <p class="card-text">
                    Glasgow is unique in that many of the city's top museums and
                    galleries are free-to-visit. Kelvingrove Art Gallery and Museum
                    and The Burrell Collection are 2 of Scotland's cultural gems,
                    famed for their world-class cultural collections, as well as their
                    beautiful parkland settings.
                    </p>
                    <a href="peoplemakeglasgow.com" class="btn btn-primary">
                    More Information
                    </a>
                </div>
            </div>

            <div class="card">
                <img
                    src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2FConwy_Harbour_22481198.jpg&action=ProductDetailFullWidth2"
                    class="card-img-top"
                    alt="Picture of Manchester"
                />
                <div class="card-body">
                    <h5 class="card-title">Manchester</h5>
                    <p class="card-text">
                    Manchester is a major city in the northwest of England with a rich
                    industrial heritage. The Castlefield conservation area’s
                    18th-century canal system recalls the city’s days as a textile
                    powerhouse, and visitors can trace this history at the interactive
                    Museum of Science & Industry. The revitalised Salford Quays
                    dockyards now house the Daniel Libeskind-designed Imperial War
                    Museum North and the Lowry cultural centre.
                    </p>
                    <a href="https://www.visitmanchester.com/" class="btn btn-primary">
                    More Information
                    </a>
                </div>
            </div>
            <div class="card">
                <img
                    src="https://cdn-lnp.dataweavers.io/-/media/images/london/visit/whats-on/event-pages/buckinghampalace1920x1080.jpg?rev=c88f581f5aa2444f97f3343f60008663?mw=640&hash=52C77C542B4531A72B120C5586046410"
                    class="card-img-top"
                    alt="Picture of London"
                />
                <div class="card-body">
                    <h5 class="card-title">London</h5>
                    <p class="card-text">
                    Welcome to London! Discover the best of London with Visit London,
                    the official guide to England’s exciting capital. Find things to
                    do in London, from iconic sightseeing spots and fun-filled days
                    out to top restaurants, theatre and unmissable London events. If
                    you’re not able to visit just yet, plan ahead to make the most of
                    your next visit.
                    </p>
                    <a href="https://www.visitlondon.com/" class="btn btn-primary">
                    More Information
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TouristInfoCards;