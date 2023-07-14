import PropTypes from "prop-types";

function Header({ title }) {
  return <h1>{title}</h1>;
}

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
