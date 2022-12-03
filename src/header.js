import hotel from "./belfry-hotel-logo.png";
function Header() {
  return (
    <div>
      <header className="App-header" id="hederHotel">
        <img id="hotel-logo" src={hotel} alt="hotel-Logo" />
        <p id="header-name">CYF Hotel</p>
      </header>
    </div>
  );
}

export default Header;
