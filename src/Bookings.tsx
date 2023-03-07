import React, { useState, useEffect } from 'react';
import NewBookings from './NewBookings';
import Search from './Search';
import SearchResults from './SearchResults';
import { BookingsType } from './types';

const Bookings = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean | null>(null);
  const [bookings, setBookings] = useState<BookingsType[]>([]);
  const [filteredResults, setFilteredResults] = useState<BookingsType[]>([]);
  const search = (searchVal: string): void => {
    if (!bookings.length) return;
    if (searchVal !== '') {
      const keys = ['firstName', 'surname'];
      const filteredData = bookings.filter((booking) =>
        keys.some((key) => booking[key].toLowerCase().includes(searchVal))
      );
      setFilteredResults(filteredData);
    } else if (searchVal === '') {
      setFilteredResults(bookings);
    }
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('https://cyf-react.glitch.me/');
        if (!response.ok) throw Error('Did not receive expected data');
        const data = await response.json();
        setIsError(null);
        setBookings(data);
        setFilteredResults(data);
      } catch (err: any) {
        setIsError(err.message);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const newBookings = (obj: BookingsType): void => {
    setBookings((prev) => [...prev,obj]);
    setFilteredResults((prev) => [...prev,obj]);
  };

  const getOrderedData = (data: BookingsType[]): void => {
    setFilteredResults(data);
  };

  return (
    <div className='App-content'>
      <div className='container'>
        <Search search={search} />
        {isError && <div>{isError}</div>}
        {isLoading && (
          <div className='spinner-border' role='status'>
            <span className='visually-hidden' />
          </div>
        )}
        {!isError && !isLoading && (
          <>
            <SearchResults
              results={filteredResults}
              getOrderedData={getOrderedData}
            />
            <NewBookings newBookings={newBookings} bookings={bookings} />
          </>
        )}
      </div>
    </div>
  );
};

export default Bookings;
