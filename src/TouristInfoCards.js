import React from 'react';
import Cards from './Cards';
import faker from 'faker';
const TouristInfoCards = () => {
    return (
        <div className="card-deck">
            <Cards website="https://peoplemakeglasgow.com/" city="Glasgow" image={faker.image.city()} />
            <Cards website="https://www.visitmanchester.com/" city="Manchester" image={faker.image.city()} />
            <Cards website="https://www.visitlondon.com/" city="London" image={faker.image.city()} />

        </div>
    )
};

export default TouristInfoCards;