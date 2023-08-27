import { Route, Routes } from "react-router";
import Products from "./pages/Products";
import NavBar from "./components/NavBar";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Spread from "./pages/Spread";
const App = () => {
  return (
    <div className="container mx-auto ">
      <NavBar />
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/detail/:id" element={<ProductDetail/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/success" element={<Success/>}></Route>
          <Route path="/spread" element={<Spread/>}></Route>
        </Routes>
    </div>
  );
};

export default App;
