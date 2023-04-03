import React from 'react'

import Bookings from './Bookings'
import './App.css'
import { Heading } from './Heading'
import { TouristInfoCards } from './TouristInfoCards'
import Restaurant from './Restaurant'
import { Footer } from './Footer'

const App = () => {
  return (
    <div className="App">
      <Heading
        className={'App-header'}
        src={
          'https://png.pngtree.com/png-clipart/20190705/original/pngtree-hotel-icon-for-personal-and-commercial-use-png-image_4341927.jpg'
        }
      >
        CYF Hotel
      </Heading>
      <TouristInfoCards className={'Tourist-info-cards'} />
      <Bookings />
      <Restaurant />
      <Footer
        data={[
          '123 Fake Street, London, E1 4UD',
          'hello@fakehotel.com',
          '0123 456789',
        ]}
      />
    </div>
  )
}

export default App
