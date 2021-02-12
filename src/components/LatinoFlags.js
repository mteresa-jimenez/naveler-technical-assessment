import "../styles/LatinoFlags.scss";

const LatinoFlags = (props) => {
  const latinoFlag = props.countries
    .filter((country) => country.is_latino)
    .map((country, index) => {
      return (
        <li key={index}>
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
      <ul>{latinoFlag}</ul>
    </div>
  );
};

export default LatinoFlags;
