import { useEffect, useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    try {
      const response = await fetch("https://cyf-react.glitch.me");
      const data = await response.json();
      setBookings(data);
    } catch (err) {
      console.error(err);
    }
  };

  const search = (searchVal) => {
    if (!searchVal.trim()) return getBookings();
    const regExp = new RegExp(searchVal.trim(), "i");
    const filteredCustomers = bookings.filter(
      ({ firstName, surname }) => regExp.test(firstName) || regExp.test(surname)
    );
    setBookings(() => filteredCustomers);
  };

  return (
    <section className="container py-5">
      <Search search={search} />
      <SearchResults results={bookings} />
    </section>
  );
};

export default Bookings;
