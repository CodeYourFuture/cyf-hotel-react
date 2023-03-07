import React, { useState, useEffect } from 'react';
import CustomerProfile from './CustomerProfile';
import { BookingsType, ProfileDataType } from './types';
import Result from './Result';

type PropsType = {
  results: BookingsType[];
  getOrderedData: (data: BookingsType[]) => void;
};

const SearchResults = ({ results, getOrderedData }: PropsType) => {
  const [storedId, setStoredId] = useState<number | null>(null);
  const [profileData, setProfileData] = useState<ProfileDataType>(
    {} as ProfileDataType
  );
  const getId = (id: number) => {
    setStoredId(id);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (storedId !== null) {
          const res = await fetch(
            `https://cyf-react.glitch.me/customers/${storedId}/`
          );
          const data = await res.json();
          setProfileData(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [storedId]);

  const [order, setOrder] = useState('ASC');
  const sorting = (col: keyof BookingsType) => {
    if (order === 'ASC') {
      const sorted = results.sort((a: BookingsType, b: BookingsType) =>
        a[col].toString().toLowerCase() > b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      getOrderedData(sorted);
      setOrder('DSC');
    }
    if (order === 'DSC') {
      const sorted = results.sort((a: BookingsType, b: BookingsType) =>
        a[col].toString().toLowerCase() < b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      getOrderedData(sorted);
      setOrder('ASC');
    }
  };

  return (
    <div className='widthTooLong'>
      <table className='table text-center'>
        <thead>
          <tr>
            <th onClick={() => sorting('id')}>id</th>
            <th onClick={() => sorting('title')}>title</th>
            <th onClick={() => sorting('firstName')}>first name</th>
            <th onClick={() => sorting('surname')}>surname</th>
            <th onClick={() => sorting('email')}>email</th>
            <th onClick={() => sorting('roomId')}>room id</th>
            <th onClick={() => sorting('checkInDate')}>check in date</th>
            <th onClick={() => sorting('checkOutDate')}>check out date</th>
            <th>nights</th>
            <th>profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map((data: BookingsType) => (
            <Result key={data.id} data={data} getId={getId} />
          ))}
        </tbody>
      </table>
      {storedId && <CustomerProfile profileData={profileData} />}
    </div>
  );
};

export default SearchResults;
