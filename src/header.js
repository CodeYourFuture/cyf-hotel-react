import hotel from "./logo.jpg";
function Header() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary">
        <div class="container-md">
          <a class="navbar-brand" href="#">
            Home
          </a>
          <a class="navbar-brand" href="#">
            Profile
          </a>
          <a class="navbar-brand" href="#">
            About
          </a>
        </div>
        <img id="hotel-logo" src={hotel} alt="hotel-Logo" />
      </nav>
    </div>
  );
}

export default Header;
