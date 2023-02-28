import { Account } from "./Account";
import { Heading } from "./Heading";
import { AddGuestsAndSearch } from "./AddGuestsAndSearch";

export const Header = () => {
  return (
    <header className="App-header">
      <Heading />
      <AddGuestsAndSearch />
      <Account />
    </header>
  );
};
