import logo from './assets/hotel.svg';
import React, { useContext } from 'react';
import { formErrorContext } from './App';

const Heading = () => {
  const { isFormError, setIsFormError } = useContext(formErrorContext);
  return (
    <>
      <header className='App-header'>
        CYF Hotel <img src={logo} alt='logo' />
        {isFormError && (
          <div
            className='alert alert-danger alert-dismissible formError'
            role='alert'
          >
            <div>The fields do not contain correct information.</div>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='alert'
              aria-label='Close'
              onClick={() => setIsFormError(false)}
            />
          </div>
        )}
      </header>
    </>
  );
};

export default Heading;
