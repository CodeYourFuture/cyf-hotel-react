import hotel from "./logo.jpg";
function Header() {
  return (
    <div id="nav_bar">
      <img id="hotel-logo" src={hotel} alt="hotel-Logo" />
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-md">
          <a className="navbar-brand" href="#">
            Home
          </a>
          <a className="navbar-brand" href="#">
            Profile
          </a>
          <a className="navbar-brand" href="#">
            About
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
