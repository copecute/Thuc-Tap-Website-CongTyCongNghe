import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import Styles from './SliderShow.module.css';

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transition, setTransition] = useState(true);
  
    // Thêm state để kiểm soát chuyển động tự động
    const [autoPlay, setAutoPlay] = useState(true);
  
    // Sử dụng useCallback để bao bọc hàm nextSlide
    const nextSlide = useCallback(() => {
      setTransition(true); // Kích hoạt hiệu ứng chuyển động
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, [images.length]); // Thêm images.length vào mảng dependency
  
    const prevSlide = useCallback(() => {
      setTransition(true); // Kích hoạt hiệu ứng chuyển động
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }, [images.length]); // Thêm images.length vào mảng dependency
  
    // Dừng hoặc khởi động chuyển động tự động khi click vào slider
    const toggleAutoPlay = () => {
      setAutoPlay(!autoPlay);
    };
  
    // Sự kiện kết thúc hiệu ứng chuyển động
    const handleTransitionEnd = () => {
      setTransition(false);
    };
  
    useEffect(() => {
      // Hàm chuyển slide tự động
      const autoPlayInterval = setInterval(() => {
        if (autoPlay) {
          nextSlide();
        }
      }, 5000); // Chuyển slide sau mỗi 5 giây
  
      // Clear interval khi component unmount
      return () => clearInterval(autoPlayInterval);
    }, [autoPlay, nextSlide]); // Thêm nextSlide vào mảng dependency
  
    return (
      <div
        className={clsx(Styles.slider, {
          [Styles.transition]: transition,
        })}
        onClick={toggleAutoPlay}
      >
        <div
          className={clsx(Styles.prev, Styles.button)}
          onClick={prevSlide}
        >
          &lt;
        </div>
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className={clsx(Styles.slide, {
            [Styles.transition]: transition,
          })}
          onTransitionEnd={handleTransitionEnd}
        />
        <div
          className={clsx(Styles.next, Styles.button)}
          onClick={nextSlide}
        >
          &gt;
        </div>
      </div>
    );
  };
  
  export default Slider;