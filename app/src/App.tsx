import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import Shop from "./components/Shop";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import MyAccount from "./components/MyAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/shop/:category/:product" element={<ProductDetails />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account/:userName" element={<MyAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
