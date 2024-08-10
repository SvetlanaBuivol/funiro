import { ReactComponent as FavoriteIcon } from "../../assets/svg/Heart.svg";
import { ReactComponent as CartIcon } from "../../assets/svg/Cart.svg";
import UserAvatar from "./UserAvatar/UserAvatar";
import { Box } from "./UserActions.styled";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { SearchButton } from "../SearchBar/SearchBar.styled";
import { ReactComponent as SearchIcon } from "../../assets/svg/Search.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg/hamburgerMenu.svg";
import PropTypes from "prop-types";

const UserActions = ({
  openSearchBar,
  isSearchIconVisible,
  // openMobileMenu
}) => {
  const isTablet = useMediaQuery({ query: "(max-width: 1439px" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px" });

  return (
    <Box>
      {isTablet && !isSearchIconVisible && (
        <SearchButton onClick={openSearchBar}>
          <SearchIcon />
        </SearchButton>
      )}
      <Link to="favorites">
        <FavoriteIcon width={16} height={16} />
      </Link>
      <Link to="shopcart">
        <CartIcon />
      </Link>
      {!isMobile && (
        <Link to="account">
          <UserAvatar />
        </Link>
      )}
      {isMobile && (
        <button
        //   onClick={openMobileMenu}
        >
          <MenuIcon />
        </button>
      )}
    </Box>
  );
};

UserActions.propTypes = {
  openSearchBar: PropTypes.func,
  isSearchIconVisible: PropTypes.bool.isRequired,
  // openMobileMenu: PropTypes.func.isRequired,
};

export default UserActions;
