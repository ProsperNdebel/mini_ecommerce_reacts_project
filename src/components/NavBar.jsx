import React from "react";
import classes from "./NavBar.module.css";
import imageAvatar from "../images/imageAvatar.png"; //this is how you do imports for files in react with(you need extensions)
import svgIcon from "../images/icon-cart.svg";
function NavBar({ handleCartState, orderAmount }) {
  return (
    <nav className={classes.noneDisplay}>
      <div className={classes.leftLinks}>
        <h3 className={classes.saleCategory}>sneakers</h3>
        <p className={classes.saleType}>Collections</p>
        <p className={classes.saleType}>Men</p>
        <p className={classes.saleType}>Women</p>
        <p className={classes.saleType}>About</p>
        <p className={classes.saleType}>Contact</p>
      </div>
      <div className={classes.rightlinks}>
        <img src={svgIcon} alt="img" onClick={handleCartState} />
        <img className={classes.imgIcon} src={imageAvatar} alt="img" />
        <span className={classes.numItems}>{orderAmount}</span>
      </div>
    </nav>
  );
}
//late take thes classes to the css file

export default NavBar;
