import { useMediaQuery } from "react-responsive";
import { NavItem, NavList } from "./HeaderNav.styled";
import { ReactComponent as ArrowDown } from "../../assets/svg/arrowDown.svg";

const HeaderNav = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <>
      {!isMobile && (
        <nav>
          <NavList>
            <NavItem>
              <p>Products</p>
              <ArrowDown />
            </NavItem>
            <NavItem>
              <p>Rooms</p>
              <ArrowDown />
            </NavItem>
            <li>Inspirations</li>
          </NavList>
        </nav>
      )}
    </>
  );
};

export default HeaderNav;
