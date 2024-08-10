import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import HeaderNav from "../HeaderNav/HeaderNav";
import SearchBar from "../SearchBar/SearchBar";
import { Box, Logo } from "./Header.styled";
import UserActions from "../UserActions/UserActions";

const Header = ({
  openSearchBar,
  isSearchIconVisible,
  // openMobileMenu
}) => {
  return (
    <Box>
      <Link to="/">
        <Logo>Funiro.</Logo>
      </Link>
      <HeaderNav />
      <SearchBar />
      <UserActions
        openSearchBar={openSearchBar}
        isSearchIconVisible={isSearchIconVisible}
        // openMobileMenu={openMobileMenu}
      />
    </Box>
  );
};

Header.propTypes = {
  openSearchBar: PropTypes.func,
  isSearchIconVisible: PropTypes.bool.isRequired,
  // openMobileMenu: PropTypes.func.isRequired,
};

export default Header;
