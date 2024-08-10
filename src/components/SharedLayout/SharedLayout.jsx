import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { HeaderSection } from "./SharedLayout.styled";
import Container from "../Container/Container";
import SearchBar from "../SearchBar/SearchBar";
import { useMediaQuery } from "react-responsive";
// import ModalPortal from "../Modals/ModalPortal";
// import MobileMenuModal from "../Modals/MobileMenuModal/MobileMenuModal";

const SharedLayout = () => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1439px" });

  const handleOpenMobileSearch = () => {
    setIsMobileSearchOpen(true);
  };

  const handleCloseMobileSearch = () => {
    setIsMobileSearchOpen(false);
  };

  //   const handleOpenMobileMenu = () => {
  //     setIsMobileMenuOpen(true);
  //   };

  //   const handleCloseMobileMenu = () => {
  //     setIsMobileMenuOpen(false);
  //   };
  return (
    <>
      <header>
        <HeaderSection>
          <Container>
            <Header
              //   openMobileMenu={handleOpenMobileMenu}
              openSearchBar={handleOpenMobileSearch}
              isSearchIconVisible={isMobileSearchOpen}
            />
            {isMobileSearchOpen && isMobile && (
              <SearchBar
                isMobileSearch={isMobileSearchOpen}
                closeSearchBar={handleCloseMobileSearch}
              />
            )}
            {/* <ModalPortal isOpen={isMobileMenuOpen}>
              <MobileMenuModal onClose={handleCloseMobileMenu} />
            </ModalPortal> */}
          </Container>
        </HeaderSection>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default SharedLayout;
