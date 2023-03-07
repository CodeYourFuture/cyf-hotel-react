import React from 'react';
import { ProfileDataType } from './types';
type PropsType = {
  profileData: ProfileDataType;
};
const CustomerProfile = ({ profileData }: PropsType) => {
  return (
    <div className='text-center'>
      <div className='page-header'>
        <h4 className='text-left'>Customer Profile</h4>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>id: {profileData.id}</li>
        <li className='list-group-item'>Email: {profileData.email}</li>
        <li className='list-group-item'>
          VIP: {profileData.vip ? 'YES' : 'NO'}
        </li>
        <li className='list-group-item'>
          Phone Number:{' '}
          {profileData.vip ? profileData.phoneNumber : 'NO VIP NO Phone'}
        </li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
