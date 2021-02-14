import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div>
        <h1>NAVELER</h1>
        <Link to="/latino-flags" title="Go to flags from latino countries">
          1. Flags from latino countries
        </Link>
        <Link to="/user-country-data" title="Go to user's country data">
          2. Go to user's country data
        </Link>
        <Link to="/graph" title="Go to graph">
          3. Go to graph
        </Link>
      </div>
    </>
  );
};

export default Landing;
