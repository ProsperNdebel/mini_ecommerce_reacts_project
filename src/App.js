import "./App.css";
import ImageSection from "./components/ImageSection";
import NavBar from "./components/NavBar";
import RelatedInfo from "./components/RelatedInfo";
import Cart from "./components/Cart.jsx";
import { useState } from "react";
import InfoToDisplay from "./components/InfoToDisplay";
import ModalPopUp from "./components/ModalPopUp";
import imageproduct1 from "./images/imageProduct1.jpg";
import imageproduct2 from "./images/imageProduct2.jpg";
import imageproduct3 from "./images/imageProduct3.jpg";
import imageproduct4 from "./images/imageProduct4.jpg";
function App() {
  const [openCart, setOpenCart] = useState(false);
  const [orderAmount, setOrderAmount] = useState(0);
  const [modal, setModal] = useState(false);
  const imgArr = [imageproduct1, imageproduct2, imageproduct3, imageproduct4];
  const [renderedImage, setRenderedImage] = useState(imgArr[0]);
  //switches the image
  const switchDisplayedImage = (e) => {
    setRenderedImage(imgArr[+e.target.id - 1]);
  };
  //opens and closes the modal
  const displayModal = () => {
    setModal(!modal);
  };
  const handleCartState = () => {
    setOpenCart((prev) => {
      return !prev;
    });
  };
  //this function does the logic of determining whether to subtract or add
  const addRemove = (e) => {
    if (e.target.innerHTML === "-") {
      setOrderAmount((prev) => {
        if (prev === 0) return (prev = 0);
        return prev - 1;
      });
    } else if (e.target.innerHTML === "+") {
      setOrderAmount((prev) => {
        return prev + 1;
      });
    } else {
      return;
    }
  };
  return (
    <div className="App">
      <NavBar
        handleCartState={handleCartState}
        orderAmount={orderAmount}
      ></NavBar>
      <div className="pageCenter">
        <ImageSection
          openUpModal={displayModal}
          displayedImage={renderedImage}
          switchDisplayedImage={switchDisplayedImage}
        />
        <RelatedInfo addRemove={addRemove} orderAmount={orderAmount} />
      </div>
      {openCart && (
        <Cart number={orderAmount}>
          <InfoToDisplay number={orderAmount} />
        </Cart>
      )}
      {modal && (
        <ModalPopUp
          openCloseModal={displayModal}
          openUpModal={displayModal}
          displayedImage={renderedImage}
          switchDisplayedImage={switchDisplayedImage}
        />
      )}
    </div>
  );
}

//give these guys classes so you can style them in the main css
export default App;
