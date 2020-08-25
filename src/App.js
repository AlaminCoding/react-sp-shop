import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Shop from "./components/shop";
import fakedata from "./fakeData";

function App() {
  const fast10 = fakedata.slice(0, 10);
  const [product, setProduct] = useState(fast10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  const handleDeleteProduct = (product) => {
    const newCarts = cart.filter((data) => data !== product);
    setCart(newCarts);
  };
  return (
    <React.Fragment>
      <Header productNumber={cart.length} />
      <Shop
        product={product}
        handleAddProduct={handleAddProduct}
        handleDeleteProduct={handleDeleteProduct}
        cart={cart}
      />
    </React.Fragment>
  );
}

export default App;
