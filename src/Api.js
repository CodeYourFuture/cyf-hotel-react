const getReservations = () => {
  return fetch("http://localhost:8080/api/reservations/").then(response =>
    response.json()
  );
};

export default {
  getReservations: getReservations
};
