import React, { useState } from 'react';
import moment from 'moment';
import { BookingsType } from './types';

type PropsType = {
  data: BookingsType;
  getId: (id: number) => void;
};

const Result = ({
  data: {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
  },
  getId
}: PropsType) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const toggleBg = () => {
    setIsActive((current: boolean) => !current);
  };

  return (
    <tr
      style={{ backgroundColor: isActive ? 'yellow' : '' }}
      onClick={toggleBg}
    >
      <th scope='row'>{id}</th>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{moment(checkOutDate).diff(moment(checkInDate), 'days')}</td>
      <td>
        <button className='btn btn-primary' onClick={() => getId(id)}>
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default Result;
