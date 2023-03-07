import React from 'react';
import glasgow from './assets/glasgow.webp';
import manchester from './assets/manchester.webp';
import london from './assets/london.webp';

const TouristInfoCards = () => {
  const cities = [
    {
      img: glasgow,
      title: 'Glasgow',
      text: 'Glasgow is the most populous city in Scotland and the fourth-most             populous city in the United Kingdom.',
      link: 'http://www.peoplemakeglasgow.com'
    },
    {
      img: manchester,
      title: 'Manchester',
      text: 'Manchester is a city in Greater Manchester.It had a population of 552,000 in 2021.',
      link: 'http://www.visitmanchester.com'
    },
    {
      img: london,
      title: 'London',
      text: 'London is the capital and largest city of England and the United Kingdom.',
      link: 'http://www.visitlondon.com'
    }
  ];
  return (
    <div className='tourist-card-container card-group'>
      {cities.map(({ img, title, text, link }, idx) => (
        <div key={idx} className='card'>
          <img src={img} className='card-img-top' alt={title} />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{text}</p>
            <a href={link} className='btn btn-primary'>
              More Information
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
