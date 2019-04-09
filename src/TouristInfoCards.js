import React from 'react';
import Cards from './Cards'

const TouristInfoCards = () => {
    return (
        <div className="cards">
            <Cards website="https://peoplemakeglasgow.com/" city="Glasgow" />
            <Cards website="https://www.visitmanchester.com/" city="Manchester" />
            <Cards website="https://www.visitlondon.com/" city="London" />

        </div>
    )
};

export default TouristInfoCards;