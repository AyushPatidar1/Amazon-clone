import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Lists from "./Components/Lists";
import ProductPage from "./Components/ProductPage";
import CartSection from "./Components/CartSection";
import Payment from "./Components/Payment";
import Profile from "./Components/Profile";
import Orders from "./Components/Orders";
import Error from "./Components/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wishlists" element={<Lists />} />
        <Route path="/cart" element={<CartSection />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
