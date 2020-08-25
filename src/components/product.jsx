import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const AddProduct = () => {
    props.addProduct(props.product);
  };
  return (
    <div className="single-product">
      <img src={props.product.img} alt="" />
      <div className="product-details">
        <h2>{props.product.name}</h2>
        <div className="d-flex">
          <p>By {props.product.seller}</p>
          <p>Only {props.product.stock} product left.</p>
        </div>
        <div className="d-flex">
          <p>Price: ${props.product.price}</p>
          <p>Whole Sell Price: ${props.product.wholePrice}</p>
        </div>
        <p>Shipping Cost: ${props.product.shipping}</p>
        <button onClick={AddProduct}>
          <FontAwesomeIcon icon={faShoppingCart} className="cart-btn" />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
