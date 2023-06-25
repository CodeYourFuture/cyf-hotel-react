import React, {Fragment} from "react";
import InfoCard from "./InfoCard";

const cardsInfo = [
    {
        img: "/images/glasgow.jpeg",
        title: "Glasgow",
        descr: "Glasgow is the largest city in Scotland, and the third-largest city in the United Kingdom. It’s also one of Britain’s 32 unitary authorities, handling local government for Glasgow City Council. The city is very well-known for being one of the UK’s most important industrial centers, with a strong focus on fashion, retail and technology.",
        link: "/images/glasgow.jpeg",
    },
    {
        img: "/images/manchester.jpeg",
        title: "Manchester",
        descr: "Manchester is the only UK city to feature in Lonely Planet's Best in Travel 2023 list and the only UK city in National Geographic's influential ‘Best of the World’ list which annually sets out 25 of the must-see places to visit around the globe.",
        link: "https://visitmanchester.com",
    },
    {
        img: "/images/london.jpeg",
        title: "London",
        descr: "Welcome to London! Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events. If you’re not able to visit just yet, plan ahead to make the most of your next visit.",
        link: "https://visitlondon.com",
    },
]

const TouristInfoCards = () => {
    return (
        <div className="card-deck card-deck-grid">
            {cardsInfo.map(card=>{
                const { img, title, descr, link } = card;
                return (<Fragment key={title}>
                    <InfoCard img={img} title={title} descr={descr} link={link}/>
                </Fragment>)
            })}
        </div>
    );
};

export default TouristInfoCards;
