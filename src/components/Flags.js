const Flags = (props) => {
  const Flag = props.countries.map((country, index) => {
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
    <div>
      <ul>{Flag}</ul>
    </div>
  );
};

export default Flags;
