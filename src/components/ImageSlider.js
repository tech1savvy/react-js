import React, { useState } from "react";
import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
  const images = [
    "https://placehold.co/600x400/grey/white?text=1",
    "https://placehold.co/600x400/grey/white?text=2",
    "https://placehold.co/600x400/grey/white?text=3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.slider}>
      <button className={styles.prev} onClick={goToPrevious}>
        Prev
      </button>
      <img src={images[currentIndex]} alt="slider" className={styles.image} />
      <button className={styles.next} onClick={goToNext}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
