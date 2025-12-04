import React, { useState, useEffect, useRef } from "react";
import "./carousel.css";

const Carousel = ({ images, autoPlayInterval = 3000 }) => {
  const [index, setIndex] = useState(0);
  const slideRef = useRef();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const ignoreTouch = useRef(false);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [index]);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Swipe gesture
  const handleTouchStart = (e) => {
    if (e.target && e.target.closest && e.target.closest(".carousel-button")) {
      ignoreTouch.current = true;
      return;
    }
    ignoreTouch.current = false;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (ignoreTouch.current) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (ignoreTouch.current) {
      ignoreTouch.current = false;
      return;
    }
    if (touchStartX.current - touchEndX.current > 50) {
      next();
    } else if (touchEndX.current - touchStartX.current > 50) {
      prev();
    }
  };

  return (
    <div
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${index * 100}%)` }}
        ref={slideRef}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className="carousel-slide"
          />
        ))}
      </div>
      <button className="carousel-button left" onClick={prev}>
        ❮
      </button>
      <button className="carousel-button right" onClick={next}>
        ❯
      </button>

      {/* Dots Indicator */}
      {/* <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
