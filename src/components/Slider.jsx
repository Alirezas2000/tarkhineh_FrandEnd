import React, { useState } from 'react';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div id="slider__header--top" className="slider">
      <img src="/images/PNG/Slider.png" alt="Slider" />
      <button className="nav-btn prev" onClick={prevSlide}>{"<"}</button>
      <button className="nav-btn next" onClick={nextSlide}>{">"}</button>
      <div className="slider-content">
        <span className="slider-text">تجربه غذای سالم و گیاهی به سبک ترخینه</span>
        <button className="order-btn">سفارش آنلاین غذا</button>
      </div>
      <div className="slide-counter">
        {[...Array(totalSlides)].map((_, i) => (
          <div
            key={i}
            className={`counter-dot ${i === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;