import "./header.scss";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul className="navigator_container">
      <li>
        <Link to={"/"}> Home Page</Link>
      </li>
      <li>
        <Link to={"/gallery"}> Gallery </Link>
      </li>
      <li>
        <Link to={"/aboutus"}> About Us</Link>
      </li>
      <li>
        <Link to={"/links"}> Links</Link>
      </li>
      <li>
        <Link to={"/contacts"}> Contakts </Link>
      </li>
    </ul>
  );
}

export default Navigation;
