import React from 'react';

const  Stayindays = (props) => {
  var checkInDate=new Date(props.checkInDate);
  var checkOutDate=new Date(props.checkOutDate);
  var days = 1000*60*60*24;
  var daysStayedIN = checkOutDate - checkInDate;
  return Math.floor(daysStayedIN/days)
}
export default Stayindays;