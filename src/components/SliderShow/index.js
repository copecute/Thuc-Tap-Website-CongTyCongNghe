import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import Styles from './SliderShow.module.css';

function SliderShow({images}) {
  // State để theo dõi index của slide hiện tại
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hàm chuyển đến slide tiếp theo, được bọc trong useCallback để tránh cảnh báo
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [setCurrentIndex, images.length]);

  // Hàm chuyển đến slide trước đó
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Sử dụng useEffect để thiết lập interval cho việc tự động chuyển slide sau 5 giây
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    // Cleanup function để dọn dẹp interval khi component unmounted hoặc currentIndex thay đổi
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, nextSlide]);

  return (
    <div className={clsx(Styles.slider)}>
      <div className={clsx(Styles.prev, Styles.GiangSliderControl)} onClick={prevSlide}>
        &lt;
      </div>
      {/* Phần hiển thị slides */}
      <div
        className={clsx(Styles.slides)}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* Lặp qua các hình ảnh để hiển thị */}
        {images.map((image, index) => (
          <div
            key={index}
            className={clsx(Styles.slide, { [Styles.active]: index === currentIndex })}
          >
            <img src={image} alt={`Minh Giang Pc Slider ${index}`} />
          </div>
        ))}
      </div>
      <div className={clsx(Styles.next, Styles.GiangSliderControl)} onClick={nextSlide}>
        &gt;
      </div>
    </div>
  );
}

export default SliderShow;