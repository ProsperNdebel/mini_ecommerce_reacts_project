import React from "react";
import classes from "./ImageSection.module.css";
import imageProduct1Thumbnail from "../images/imageProduct1Thumbnail.jpg";
import imageProduct2Thumbnail from "../images/imageProduct2Thumbnail.jpg";
import imageProduct3Thumbnail from "../images/imageProduct3Thumbnail.jpg";
import imageProduct4Thumbnail from "../images/imageProduct4Thumbnail.jpg";
function ImageSection({ openUpModal, displayedImage, switchDisplayedImage }) {
  return (
    <div className={classes.images}>
      <div className={classes.largeImage}>
        <img
          className={classes.topImage}
          src={displayedImage}
          onClick={openUpModal}
          alt="imag"
        />
      </div>
      <div className={classes.btnImages}>
        <img
          className={classes.btmImage}
          src={imageProduct1Thumbnail}
          id="1"
          onClick={switchDisplayedImage}
          alt="imag"
        />
        <img
          className={classes.btmImage}
          src={imageProduct2Thumbnail}
          id="2"
          onClick={switchDisplayedImage}
          alt="imag"
        />
        <img
          className={classes.btmImage}
          src={imageProduct3Thumbnail}
          id="3"
          onClick={switchDisplayedImage}
          alt="imag"
        />
        <img
          className={classes.btmImage}
          src={imageProduct4Thumbnail}
          id="4"
          onClick={switchDisplayedImage}
          alt="imag"
        />
      </div>
    </div>
  );
}

export default ImageSection;
