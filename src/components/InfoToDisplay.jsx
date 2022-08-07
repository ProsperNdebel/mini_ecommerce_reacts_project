import React from "react";
import classes from "./InfoToDisplay.module.css";
import imgIcon from "../images/imageProduct1Thumbnail.jpg";
import delIcon from "../images/icon-delete.svg";
function InfoToDisplay({ number }) {
  return (
    <>
      <div className={classes.container}>
        <img src={imgIcon} alt="shoeimg" className={classes.imgIcon} />
        <div className={classes.forTextAlign}>
          <p className={classes.descriptiveText}>
            Fall Limited Edition Sneakers
            <br />
          </p>
          <p className={classes.descriptiveText}>
            125.00<span>x</span>
            {number} <span className={classes.Price}>${125 * number}.00</span>
          </p>
        </div>
        <img src={delIcon} alt="delete" className={classes.delete} />
      </div>
      <div className={classes.checkOut}>Checkout</div>
    </>
  );
}

export default InfoToDisplay;
