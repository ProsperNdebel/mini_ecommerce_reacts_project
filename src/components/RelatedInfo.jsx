import React from "react";
import classes from "./RelatedInfo.module.css";
import svgIcon from "../images/icon-cart1.svg";

function RelatedInfo({ addRemove, orderAmount }) {
  return (
    <div className={classes.wrapper}>
      <h4 className={classes.brandName}>Sneaker Company</h4>
      <h2 className={classes.season}>
        Fall Limited Edition <span>Sneakers</span>
      </h2>
      <p className={classes.littleinfo}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </p>
      <div className={classes.priceInfo}>
        <h3 className={classes.price}>$125.00</h3>
        <p className={classes.discount}>50%</p>
      </div>
      <p className={classes.originalPrice}>$250</p>
      <div className={classes.cartRelated}>
        <div className={classes.left} onClick={addRemove}>
          <span className={classes.colorMe}>-</span>
          <span>{orderAmount}</span>
          <span className={classes.colorMe}>+</span>
        </div>
        <div className={classes.right}>
          <div>
            <img src={svgIcon} alt="img" />
            <span className={classes.addCart}>Add to Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedInfo;
