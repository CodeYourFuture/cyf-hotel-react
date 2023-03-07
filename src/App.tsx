import './App.css';
import Heading from './Heading';
import Bookings from './Bookings';
import TouristInfoCards from './TouristInfoCards';
import Footer from './Footer';
import Restaurant from './Restaurant';
import React, { useState, createContext } from 'react';
import { FormErrorContextProviderType } from './types';
export const formErrorContext = createContext<FormErrorContextProviderType>({
  isFormError: false,
  setIsFormError: () => {}
});
const App = () => {
  const [isFormError, setIsFormError] = useState<boolean>(false);
  return (
    <div className='App'>
      <formErrorContext.Provider value={{ isFormError, setIsFormError }}>
        <Heading />
        <TouristInfoCards />
        <Bookings />
        <Restaurant />
        <Footer
          value={[
            '123 Fake Street, London, E1 4UD',
            'hello@fakehotel.com',
            '0123 456789'
          ]}
        />
      </formErrorContext.Provider>
    </div>
  );
};

export default App;
