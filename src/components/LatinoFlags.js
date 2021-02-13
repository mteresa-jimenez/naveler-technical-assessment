import "../styles/LatinoFlags.scss";

const LatinoFlags = (props) => {
  const latinoFlag = props.countries
    .filter((country) => country.is_latino)
    .map((country, index) => {
      return (
        <li key={index} className="col flag">
          <img
            src={"http://dev.naveler.com:8007/static/" + country.country_flag}
            alt={"flag of " + country.name_en}
          />
        </li>
      );
    });

  return (
    <div className="latino-flags">
      <h1>Latino country flags</h1>
      <div className="container latino-flags__container">
        <ul className="row">{latinoFlag}</ul>
      </div>
    </div>
  );
};

export default LatinoFlags;
