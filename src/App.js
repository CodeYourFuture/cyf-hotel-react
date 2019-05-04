import React, { Component } from 'react'
import Heading from './Heading'
import TouristInfoCard from './TouristInfoCards'
import Footer from './Footer'
import Bookings from './Bookings'
import Restaurant from './Restaurant'
import './App.css'
import './Grid.css'

class App extends Component {
  render () {
    return (
      <div className=' App'>
        <Heading />
        <div className='Row-cards'>
          <TouristInfoCard
            location='London'
            image='https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg'
            link='www.visitlondon.com'
          />
          <TouristInfoCard
            location='Glasgow'
            image='https://www.eurohostels.co.uk/files/cms_form_value/image_path/4332/CmsFormValue_5a9d871d695a3.jpeg'
            link='www.peoplemakeglasgow.com'
          />
          <TouristInfoCard
            location='Manchester'
            image='https://www.visitbritain.com/sites/default/files/consumer_destinations/teaser_images/manchester_town_hall.jpg'
            link='www.visitmanchester.com'
          />
        </div>
        <Bookings />
        <Restaurant />
        <Footer
          value={[
            '123 Fake Street, London, E1 4UD',
            'hello@fakehotel.com',
            '0123 456789'
          ]}
        />
      </div>
    )
  }
}

export default App
