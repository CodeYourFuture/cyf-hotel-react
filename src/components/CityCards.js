import londonImage from '../images/london.jpg';
import glasgowImage from '../images/glasgow.jpg';
import manchesterImage from '../images/manchester.jpg';

const cities = [
  {
    city: 'London',
    link: 'https://www.visitlondon.com',
    img: {
      src: londonImage,
      alt: 'manchester-image',
      className: 'card-img-top',
    },
  },
  {
    city: 'Manchester',
    link: 'https://www.visitmanchester.com',
    img: {
      src: manchesterImage,
      alt: 'manchester-image',
      className: 'card-img-top',
    },
  },
  {
    city: 'Glasgow',
    link: 'https://www.peoplemakeglasgow.com',
    img: {
      src: glasgowImage,
      alt: 'manchester-image',
      className: 'card-img-top',
    },
  },
];

export default cities;
