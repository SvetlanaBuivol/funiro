import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import Main from "../pages/Main";
import ProductsPage from "../pages/ProductsPage";
import FavoritesPage from "../pages/FavoritesPage";
import ShopCartPage from "../pages/ShopCartPage";
import AccountPage from "../pages/AccountPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="shopcart" element={<ShopCartPage />} />
        <Route path="account" element={<AccountPage />} />
      </Route>
    </Routes>
  );
}

export default App;
