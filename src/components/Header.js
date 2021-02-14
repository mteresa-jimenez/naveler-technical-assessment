import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/Header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header--title">{props.title}</h1>
      <Link to="/">
        <img
          className="header--logo"
          src={logo}
          alt="Naveler logo"
          title="Go back to home"
        />
      </Link>
    </header>
  );
};

export default Header;
