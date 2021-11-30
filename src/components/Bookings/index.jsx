import { useEffect, useState } from "react";
import Search from "./Search-Form";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch("https://cyf-react.glitch.me");
      const data = await response.json();
      setBookings(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <section className="container py-5">
      <Search search={search} />
      <SearchResults results={bookings} />
    </section>
  );
};

export default Bookings;
