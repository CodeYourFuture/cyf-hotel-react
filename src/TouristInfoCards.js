import React from "react";

const TouristInfoCards = () => {
    return (
        <div className="card-deck">
                <div className="card">
                    <img src="/images/glasgow.jpeg" className="card-img-top" />
                    <div className="card-body">
                        <p class="card-text">Glasgow is the largest city in Scotland, and the third-largest city in the United Kingdom. It’s also one of Britain’s 32 unitary authorities, handling local government for Glasgow City Council. The city is very well-known for being one of the UK’s most important industrial centers, with a strong focus on fashion, retail and technology.</p>
                        <a href="https://peoplemakeglasgow.com" className="btn btn-primary">Go to Glasdow</a>
                    </div>
                </div>
                <div className="card">
                    <img src="/images/manchester.jpeg" className="card-img-top" />
                    <div className="card-body">
                        <p class="card-text">Manchester is the only UK city to feature in Lonely Planet's Best in Travel 2023 list and the only UK city in National Geographic's influential ‘Best of the World’ list which annually sets out 25 of the must-see places to visit around the globe.</p>
                        <a href="https://visitmanchester.com" className="btn btn-primary">Go to Manchester</a>
                    </div>
                </div>
            <div className="card">
                <img src="/images/london.jpeg" className="card-img-top" />
                <div className="card-body">
                    <p class="card-text">Welcome to London! Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events. If you’re not able to visit just yet, plan ahead to make the most of your next visit.</p>
                    <a href="https://visitlondon.com" className="btn btn-primary">Go to London</a>
                </div>
            </div>
        </div>
    );
};

export default TouristInfoCards;
