import React from "react";
import logo from "../img/sabbir.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
const Header = (props) => {
  const style = {
    marginLeft: "10px",
  };
  const formatCart = () => {
    return props.productNumber > 0 ? props.productNumber : "";
  };
  return (
    <header>
      <img src={logo} alt="Sabbir Logo" />
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>Account</li>
        <li>FAQ</li>
      </ul>
      <p>
        <FontAwesomeIcon icon={faShoppingCart} />
        <sub>{formatCart()}</sub>
        <FontAwesomeIcon icon={faHeart} style={style} />
      </p>
    </header>
  );
};

export default Header;
