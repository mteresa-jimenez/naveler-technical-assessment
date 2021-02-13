const UserDataFlags = (props) => {
  const flagBackground = () => {
    const userCountryCode = props.userCountry.country_code;

    if (userCountryCode === props.country.country_code) {
      return "user-flag";
    } else {
      return "all-flags";
    }
  };

  return (
    <>
      <img
        className="col"
        className={flagBackground()}
        src={"http://dev.naveler.com:8007/static/" + props.country.country_flag}
        alt={"flag of " + props.country.name_en}
      />
    </>
  );
};

export default UserDataFlags;
