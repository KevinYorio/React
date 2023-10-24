import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from "./cart.module.css";

const CartWidget = ({ itemCount }) => {
return (
    <div className={styles.cartcontainer}>
    <FaShoppingCart /> 
    <span>{itemCount}</span>
    </div>
);
}

export default CartWidget;
