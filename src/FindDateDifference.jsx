const FindDateDifference = (date1, date2) => {
  const date1Arr = date1.split("-");
  const date2Arr = date2.split("-");
  const date1Obj = {
    day: date1Arr[0],
    month: date1Arr[1],
    year: date1Arr[2]
  };
  const date2Obj = {
    day: date2Arr[0],
    month: date2Arr[1],
    year: date2Arr[2]
  };
  // hours*minutes*seconds*milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(date1Obj.day, date1Obj.month, date1Obj.year);
  const secondDate = new Date(date2Obj.day, date2Obj.month, date2Obj.year);
  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
};
export default FindDateDifference;
