export function sortInColumns(value, data, setFunction, sort, setSort) {
  switch (value) {
    case "id":
      if (sort) {
        const sortById = [...data].sort((a, b) => (a.id < b.id ? -1 : 1));
        setFunction(sortById);
      } else {
        const sortById = [...data].sort((a, b) => (a.id > b.id ? -1 : 1));
        setFunction(sortById);
      }
      break;
    case "title":
      if (sort) {
        const sortByTitle = [...data].sort((a, b) =>
          a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
        );
        setFunction(sortByTitle);
      } else {
        const sortByTitle = [...data].sort((a, b) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
        );
        setFunction(sortByTitle);
      }
      break;
    case "firstName":
      if (sort) {
        const sortByFirstName = [...data].sort((a, b) =>
          a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1
        );
        setFunction(sortByFirstName);
      } else {
        const sortByFirstName = [...data].sort((a, b) =>
          a.firstName.toLowerCase() > b.firstName.toLowerCase() ? -1 : 1
        );
        setFunction(sortByFirstName);
      }
      break;
    case "surname":
      if (sort) {
        const sortBySurname = [...data].sort((a, b) =>
          a.surname.toLowerCase() < b.surname.toLowerCase() ? -1 : 1
        );
        setFunction(sortBySurname);
      } else {
        const sortBySurname = [...data].sort((a, b) =>
          a.surname.toLowerCase() > b.surname.toLowerCase() ? -1 : 1
        );
        setFunction(sortBySurname);
      }
      break;
    case "email":
      if (sort) {
        const sortByEmail = [...data].sort((a, b) =>
          a.email.toLowerCase() < b.email.toLowerCase() ? -1 : 1
        );
        setFunction(sortByEmail);
      } else {
        const sortByEmail = [...data].sort((a, b) =>
          a.email.toLowerCase() > b.email.toLowerCase() ? -1 : 1
        );
        setFunction(sortByEmail);
      }
      break;
    case "roomId":
      if (sort) {
        const sortByRoomId = [...data].sort((a, b) =>
          a.roomId < b.roomId ? -1 : 1
        );
        setFunction(sortByRoomId);
      } else {
        const sortByRoomId = [...data].sort((a, b) =>
          a.roomId > b.roomId ? -1 : 1
        );
        setFunction(sortByRoomId);
      }
      break;
    case "checkIn":
      if (sort) {
        const sortByCheckInDate = [...data].sort((a, b) =>
          a.checkInDate < b.checkInDate ? -1 : 1
        );
        setFunction(sortByCheckInDate);
      } else {
        const sortByCheckInDate = [...data].sort((a, b) =>
          a.checkInDate > b.checkInDate ? -1 : 1
        );
        setFunction(sortByCheckInDate);
      }
      break;
    case "checkOut":
      if (sort) {
        const sortByCheckOutDate = [...data].sort((a, b) =>
          a.checkOutDate < b.checkOutDate ? -1 : 1
        );
        setFunction(sortByCheckOutDate);
      } else {
        const sortByCheckOutDate = [...data].sort((a, b) =>
          a.checkOutDate > b.checkOutDate ? -1 : 1
        );
        setFunction(sortByCheckOutDate);
      }
      break;
    // case "nights":
    //   if (sort) {
    //     const sortByCheckOutDate = [...data].sort((a, b) =>
    //       a.checkOutDate < b.checkOutDate ? -1 : 1
    //     );
    //     setFunction(sortByCheckOutDate);
    //   } else {
    //     const sortByCheckOutDate = [...data].sort((a, b) =>
    //       a.checkOutDate > b.checkOutDate ? -1 : 1
    //     );
    //     setFunction(sortByCheckOutDate);
    //   }
    //   break;
    default:
      const sortById = [...data].sort((a, b) => (a.id < b.id ? -1 : 1));
      setFunction(sortById);
  }
  setSort(!sort);
}
