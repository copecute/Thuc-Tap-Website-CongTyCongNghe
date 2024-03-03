import React, { useState, useEffect, Fragment } from 'react';
import clsx from 'clsx';
import Product from './Product';
import bgSale from '../../assets/images/bg-sale.jpg';
import titleSale from '../../assets/images/title-sale.png';
import Style from './ProductsList.module.css';
import Styles from './Sale.module.css';

function Sale() {
  const [timeLeft, setTimeLeft] = useState(4200); // 70 phút = 70 * 60 giây

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      } else {
        clearInterval(intervalId);
        // Xử lý khi hết thời gian
      }
    }, 1000);

    // Clear interval khi component unmount để tránh memory leak
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Format thời gian hiển thị
  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <Fragment>
      <div
        className={clsx(Styles.sale)}
        style={{
          backgroundImage: `url(${bgSale})`,
        }}
      >
        <div className={clsx(Styles.title)}>
          <h2>
            <img src={titleSale} alt="Hot Sale giá sốc" />
          </h2>
          <div className={clsx(Styles.flexTime)}>
            <div className={clsx(Styles.timerFlex)}>
              Kết thúc sau:
              <div className={clsx(Styles.timeIn)}>
                <span>{hours}</span>
                &nbsp;:&nbsp;
                <span>{minutes}</span>
                &nbsp;:&nbsp;
                <span>{seconds}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(Style.productItems)}>
          <Product
            title="Máy chủ Dell PowerEdge R750XS"
            oldPrice="120.309.000đ "
            Price="100.309.000đ "
            category="Máy chủ"
            star="⭐⭐⭐⭐"
            image1="/assets/images/products/server/product-1-1.png"
            image2="/assets/images/products/server/product-1-1.png"
            image3="/assets/images/products/server/product-1-1.png"
            image4="/assets/images/products/server/product-1-1.png"
          />

          <Product
            title="Máy chủ Dell PowerEdge T350"
            oldPrice="65.590.000đ"
            Price="63.690.000đ"
            category="Máy chủ"
            star="⭐⭐⭐"
            image1="/assets/images/products/server/product-2-1.png"
            image2="/assets/images/products/server/product-2-2.png"
            image3="/assets/images/products/server/product-2-3.png"
            image4="/assets/images/products/server/product-2-4.png"
          />

          <Product
            title="Máy chủ lắp ráp - I9 13900K/ 128GB Ram/ 2TB SSD/ RTX 4080 16GB"
            oldPrice="80.000.000đ "
            Price="50.000.000đ "
            category="Máy chủ"
            star="⭐⭐⭐⭐"
            image1="/assets/images/products/server/product-3-1.png"
            image2="/assets/images/products/server/product-3-2.png"
            image3="/assets/images/products/server/product-3-3.png"
            image4="/assets/images/products/server/product-3-4.png"
          />

          <Product
            title="Máy chủ Dell PowerEdge R750XS"
            oldPrice="120.309.000đ "
            Price="100.309.000đ "
            category="Máy chủ"
            star="⭐⭐⭐⭐"
            image1="/assets/images/products/server/product-1-1.png"
            image2="/assets/images/products/server/product-1-1.png"
            image3="/assets/images/products/server/product-1-1.png"
            image4="/assets/images/products/server/product-1-1.png"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Sale;
