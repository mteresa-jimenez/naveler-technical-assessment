import "../styles/UserData.scss";

const UserData = (props) => {
  console.log(props.userData.country);
  const flag = props.countries.map((country, index) => {
    return (
      <li key={index}>
        <img
          className="all-flags"
          src={"http://dev.naveler.com:8007/static/" + country.country_flag}
          alt={"flag of " + country.name_en}
        />
      </li>
    );
  });

  return (
    <div>
      <ul>{flag}</ul>
    </div>
  );
};

export default UserData;
