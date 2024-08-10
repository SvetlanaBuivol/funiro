import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";
import { ReactComponent as SearchIcon } from "../../assets/svg/Search.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CloseButton, SearchBox, StyledInput } from "./SearchBar.styled";

const SearchBar = ({ isMobileSearch, closeSearchBar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px" });
  const navigate = useNavigate();

  const handleSearchClick = () => {
    if (searchQuery) {
      navigate(`products?query=${searchQuery}`);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <>
      {(isDesktop || isMobileSearch) && (
        <SearchBox $isMobileSearch={isMobileSearch}>
          <button onClick={handleSearchClick}>
            <SearchIcon />
          </button>
          <StyledInput
            type="text"
            placeholder="Search for minimalist chair"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          {isMobileSearch && (
            <CloseButton onClick={closeSearchBar}>
              <p>x</p>
            </CloseButton>
          )}
        </SearchBox>
      )}
    </>
  );
};

SearchBar.propTypes = {
  isMobileSearch: PropTypes.bool,
  closeSearchBar: PropTypes.func,
};

export default SearchBar;
