import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = (props) => {
  return (
    <>
      <img src={logo} alt="Naveler logo" title="Naveler logo" />
      <h1>{props.title}</h1>
      <Link to="/">
        <button> Go back to home </button>
      </Link>
    </>
  );
};

export default Header;
