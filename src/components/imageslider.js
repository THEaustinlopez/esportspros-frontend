import React, { useState } from "react";
import { SliderData } from "./sliderdata";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <NavLink to={slide.url}>
            <div
              className={index === current ? "slide active" : "slide"}
              key={index.image}
              status={index.status}
            >
              {index === current && (
                <img src={slide.image} alt="logos" className="sliderimage" />
              )}
            </div>
          </NavLink>
        );
      })}
    </section>
  );
};

export default ImageSlider;
