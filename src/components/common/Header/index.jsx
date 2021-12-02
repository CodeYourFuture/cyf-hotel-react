import logoImg from "./logo.svg";
import { Heading, Logo, PrideMonth, Title } from "./view";

function Header() {
  return (
    <header>
      <Heading className="d-flex align-items-center text-light fw-bold">
        <Logo src={logoImg} alt="hotel logo" />
        <Title>Welcome to Amir's Hotel!</Title>
      </Heading>
      <PrideMonth />
    </header>
  );
}

export default Header;
