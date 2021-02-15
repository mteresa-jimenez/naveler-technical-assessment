import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Footer from "./Footer";
import "../styles/Landing.scss";

const Landing = () => {
  return (
    <div className="landing">
      <img
        src={logo}
        alt="Naveler logo"
        title="Naveler logo"
        className="landing-logo"
      />
      <div className="landing-buttons">
        <Link to="/latino-flags" title="Go to flags from latino countries">
          <button> 1. Go to flags from latino countries </button>
        </Link>

        <Link to="/user-country-data" title="Go to user's country data">
          <button> 2. Go to user's country data </button>
        </Link>

        <Link to="/graph" title="Go to graph">
          <button> 3. Go to graph </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
