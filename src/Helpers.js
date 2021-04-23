/* eslint-disable indent*/
function LengthOfStay(endDate, startDate) {
  const diff = new Date(endDate) - new Date(startDate);
  return Math.floor(diff / 86400000);
}
