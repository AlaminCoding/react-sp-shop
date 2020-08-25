import React from "react";
import Product from "./product";
import Cart from "./cart";

const Shop = (props) => {
  const { product, handleAddProduct, handleDeleteProduct, cart } = props;
  return (
    <section className="shop-section">
      <div className="product-container">
        {product.map((data) => {
          return (
            <Product
              product={data}
              key={data.key}
              addProduct={handleAddProduct}
            />
          );
        })}
      </div>
      <div className="cart-container">
        <Cart cart={cart} deleteProduct={handleDeleteProduct} />
      </div>
    </section>
  );
};

export default Shop;
