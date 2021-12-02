import { useEffect, useState } from "react";
import ErrorHandler from "./ErrorHandler";
import Loading from "./Loading";
import Search from "./Search";
import SearchResults from "./SearchResults";
import CustomerProfile from "./SearchResults/CustomerProfile";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://cyf-react.glitch.me/delayed");
      if (!response.ok) throw new Error("An error occurred while fetching data from the server!");
      const data = await response.json();
      setBookings(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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

  const handleChangeId = (CustomerId) => {
    setId((prevId) => {
      if (prevId === CustomerId) return null;
      return CustomerId;
    });
  };

  const renderSearchResults = () => {
    if (loading) return <Loading />;
    if (error) return <ErrorHandler error={error} />;
    if (!bookings.length) return <ErrorHandler error="No bookings found!" />;
    return <SearchResults results={bookings} handleChangeId={handleChangeId} />;
  };

  return (
    <section className="py-5">
      <Search search={search} isDisable={loading || error} />
      {renderSearchResults()}
      {id && <CustomerProfile id={id} />}
    </section>
  );
};

export default Bookings;
