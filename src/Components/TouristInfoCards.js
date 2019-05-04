import React from 'react';
import Card from './Card';
import faker from 'faker';
const TouristInfoCards = () => {
    const glasgowURL = "http://www.travelswithwesley.com/wp-content/uploads/2017/06/Ibuchanan-street-glascow.jpg";
    const manchesterUR = "https://upload.wikimedia.org/wikipedia/commons/7/74/At_Manchester_2018_068.jpg";
    const londonURL = "https://upload.wikimedia.org/wikipedia/commons/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg";
    return (
        <div className="card-deck">
            <Card website="https://peoplemakeglasgow.com/" city="Glasgow" image={glasgowURL} />
            <Card website="https://www.visitmanchester.com/" city="Manchester" image={manchesterUR} />
            <Card website="https://www.visitlondon.com/" city="London" image={londonURL} />

        </div>
    )
};

export default TouristInfoCards;



