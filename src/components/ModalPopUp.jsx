import React from "react";
import ImageSection from "./ImageSection";
import classes from "./ModalPopUp.module.css";
import { FaTimes } from "react-icons/fa";

function ModalPopUp({
  openCloseModal,
  displayModal,
  displayedImage,
  switchDisplayedImage,
}) {
  return (
    <div className={classes.backcolor}>
      <FaTimes className={classes.iconRemove} onClick={openCloseModal} />
      <div className={classes.centerPopUp}>
        <ImageSection
          openUpModal={openCloseModal}
          displayedImage={displayedImage}
          switchDisplayedImage={switchDisplayedImage}
        />
      </div>
    </div>
  );
}

export default ModalPopUp;
