import Header from "./Header";
import "../styles/LatinoFlags.scss";

const LatinoFlags = (props) => {
  const latinoFlag = props.countries
    .filter((country) => country.is_latino)
    .map((country, index) => {
      return (
        <li key={index} className="col">
          <img
            src={"http://dev.naveler.com:8007/static/" + country.country_flag}
            alt={"flag of " + country.name_en}
            title={"Flag of " + country.name_en}
            className="latino-flag"
          />
        </li>
      );
    });

  return (
    <>
      <Header title="Latino flags" />
      <div className="container latino-flag--container">
        <ul className="row">{latinoFlag}</ul>
      </div>
    </>
  );
};

export default LatinoFlags;
