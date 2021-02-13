import UserDataFlags from "./UserDataFlags";
import "../styles/UserData.scss";

const UserData = (props) => {
  const flag = props.countries.map((country, index) => {
    return (
      <li key={index}>
        <UserDataFlags country={country} userCountry={props.userCountry} />
      </li>
    );
  });

  return (
    <div className="container">
      <ul className="row">{flag}</ul>
    </div>
  );
};

export default UserData;
