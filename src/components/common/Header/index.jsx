import { PrideMonth } from "./view";

function Header() {
  return (
    <header>
      <div className="header d-flex align-items-center">
        <img className="logo" src="https://image.flaticon.com/icons/svg/139/139899.svg" alt="hotel logo" />
        <div className="title">Welcome to Amir's Hotel!</div>
      </div>
      <PrideMonth />
    </header>
  );
}

export default Header;
