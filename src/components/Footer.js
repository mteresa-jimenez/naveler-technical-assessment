const Footer = (props) => {
  return (
    <footer className="footer">
      <p>
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/mteresa-jimenez/"
          target="_blank"
          rel="noreferrer"
          title="Link to Teresa Jiménez LinkedIn profile"
          className="footer--link"
        >
          Teresa Jiménez
        </a>{" "}
        <span className="footer--detail">2021</span>
      </p>
    </footer>
  );
};

export default Footer;
