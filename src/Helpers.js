/* eslint-disable indent*/
function lengthOfStay(endDate, startDate) {
  const diff = new Date(endDate) - new Date(startDate);
  return Math.floor(diff / 86400000);
}

export default lengthOfStay;
