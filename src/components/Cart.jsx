import React from "react";
import classes from "./Cart.module.css";

function Cart({ children, number }) {
  //this will have to take a prop
  return (
    <div className={classes.container}>
      <p className={classes.cart}>Cart</p>
      <div className={classes.cartItems}>
        {number !== 0 ? (
          children
        ) : (
          <p className={classes.emptyCart}>Your cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
