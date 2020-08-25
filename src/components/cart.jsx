import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
const Cart = (props) => {
  const { cart, deleteProduct } = props;
  console.log(cart);
  let total = 0;
  cart.map(
    (element) => (total = parseFloat((total + element.price).toFixed(2)))
  );
  let shipping = 0;
  if (total > 100) {
    shipping = 9;
  } else if (total > 0 && total < 100) {
    shipping = 20;
  }
  let tax = parseFloat((total / 10).toFixed(2));
  let netTotal = parseFloat(total + shipping + tax).toFixed(2);

  const formatCart = () => {
    return cart.length ? "Your cart" : "Your cart is empty";
  };
  const style = {
    margin: 0,
  };
  return (
    <React.Fragment>
      <h2>Order Summery</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Items Ordered:</th>
            <th>{cart.length}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Product Price:</th>
            <th>$ {total}</th>
          </tr>
          <tr>
            <th>Shipping:</th>
            <th>$ {shipping}</th>
          </tr>
          <tr>
            <th>Tax / Vat</th>
            <th>$ {tax}</th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total Price:</th>
            <th>$ {netTotal}</th>
          </tr>
        </tfoot>
      </table>
      <h2 style={{ marginTop: "20px" }}>{formatCart()}</h2>
      <div className="cart-products">
        {cart.map((data) => (
          <React.Fragment>
            <div className="selected-product">
              <img src={data.img} alt="Product Pics" />
              <div className="full-width">
                <div className="d-flex">
                  <p>{data.name.slice(0, 20)}...</p>
                  <p className="icon">
                    <FontAwesomeIcon
                      onClick={() => deleteProduct(data)}
                      icon={faWindowClose}
                    />
                  </p>
                </div>
                <div className="d-flex">
                  <h3 style={style}>Price: ${data.price}</h3>
                  <p>Quantity: 1</p>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Cart;
