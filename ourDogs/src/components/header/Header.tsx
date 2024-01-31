import "./header.scss";
import Navigation from "./Navigation";
import HeaderLogo from "./HeaderTitle";

function Header() {
  return (
    <div className="header_wrapper">
      <HeaderLogo />
      <Navigation />
    </div>
  );
}

export default Header;
