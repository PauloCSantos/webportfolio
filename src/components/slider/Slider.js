import React, { useState } from "react";
import "./slider.css";
import sliderImg from "./sliderData";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa"

function Slider() {
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderImg.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderImg.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <>
      <div className="slider-text">Meus projetos</div>
      <div className="slider-content">
        <div className="slider">
          {sliderImg.map((imag, index) => {
            return (
              <div
                key={index}
                className="slide"
                style={{ transform: `translateX(${x}%)` }}
              >
                <div className="slide-title">{imag.title}</div>
                <img
                  className="slide-img"
                  src={imag.imgpath}
                  alt="imgs-slider"
                />
                <div className="slide-text">{imag.text}</div>
              </div>
            );
          })}
        </div>
        <button className="btn" id="goLeft" onClick={goLeft}>
          <FaArrowLeft size="2rem"/>
        </button>
        <button className="btn" id="goRight" onClick={goRight}>
          <FaArrowRight size="2rem"/>
        </button>
      </div>
    </>
  );
}

export default Slider;
