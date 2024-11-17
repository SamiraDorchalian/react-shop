import { Routes, Route, Navigate } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";

import ProductsProvider from "./context/ProductContext";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Routes>
          <Route index element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;

// https://fakestoreapi.com استفاده از api فیک
//ترکیب useState , Context + useReducer ,context , همچنین استفاده از axios
// استفاده از react-loader-spinner و react-router-dom برای ایجاد لوودر و صفحات داینامیک
