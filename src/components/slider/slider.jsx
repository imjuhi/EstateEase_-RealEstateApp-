import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [ImageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (ImageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(ImageIndex - 1);
      }
    } else {
      if (ImageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(ImageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {ImageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img src="/arrow.png" alt="" onClick={() => changeSlide("left")} />
          </div>
          <div className="imgContainer">
            <img src={images[ImageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              alt=""
              className="right"
              onClick={() => changeSlide("right")}
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            <img src="/closenew.png" alt="" />
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
