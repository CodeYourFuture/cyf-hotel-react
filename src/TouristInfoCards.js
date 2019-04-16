import React from 'react';
import Card from './Card';
import faker from 'faker';
const TouristInfoCards = () => {
    return (
        <div className="card-deck">
            <Card website="https://peoplemakeglasgow.com/" city="Glasgow" image={faker.image.city()} />
            <Card website="https://www.visitmanchester.com/" city="Manchester" image={faker.image.city()} />
            <Card website="https://www.visitlondon.com/" city="London" image={faker.image.city()} />

        </div>
    )
};

export default TouristInfoCards;