import React, { useState, useEffect, useRef, Fragment } from 'react';
import clsx from 'clsx';
import Styles from './Details.module.css';
import Home1 from 'pages/Home/Session/1.module.css';
import { Link } from 'react-router-dom';

function ProductDetails({ title, oldPrice, Price, category, image }) {
  // State quản lý id của hình ảnh đang hiển thị
  const [imgId, setImgId] = useState(1);

  // Tham chiếu đến phần tử .imgDisplay để tối ưu việc truy cập DOM
  const imgShowcaseRef = useRef(null);

  // Effect xử lý sự kiện thay đổi kích thước cửa sổ
  useEffect(() => {
    const handleResize = () => {
      const displayWidth = imgShowcaseRef.current?.firstChild.clientWidth;

      // Di chuyển hình ảnh theo id và kích thước hiển thị
      imgShowcaseRef.current.style.transform = `translateX(${-(imgId - 1) * displayWidth}px)`;
    };

    // Đăng ký sự kiện thay đổi kích thước cửa sổ
    window.addEventListener('resize', handleResize);

    // Hủy đăng ký sự kiện khi component bị unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [imgId]);

  // Xử lý sự kiện khi người dùng click vào một hình ảnh
  const handleImageClick = (event, id) => {
    event.preventDefault();
    setImgId(id);
  };

  // Effect cập nhật hiển thị khi imgId thay đổi
  useEffect(() => {
    const displayWidth = imgShowcaseRef.current?.firstChild.clientWidth;

    // Di chuyển hình ảnh theo id và kích thước hiển thị
    imgShowcaseRef.current.style.transform = `translateX(${-(imgId - 1) * displayWidth}px)`;
  }, [imgId]);

  return (
    <Fragment>
      <div className={clsx(Styles.cardWrapper)}>
        <div className={clsx(Styles.card)}>
          {/* card left */}
          <div className={clsx(Styles.productImgs)}>
            <div className={clsx(Styles.imgDisplay)}>
              <div className={clsx(Styles.imgShowcase)} ref={imgShowcaseRef}>
                <img src={image} alt={title} />
                <img src={image} alt={title} />
                <img src={image} alt={title} />
                <img src={image} alt={title} />
              </div>
            </div>
            <div className={clsx(Styles.imgSelect)}>
              <div className={clsx(Styles.imgItem)}>
                <Link to="#" onClick={(event) => handleImageClick(event, 1)}>
                  <img src={image} alt={title} />
                </Link>
              </div>
              <div className={clsx(Styles.imgItem)}>
                <Link to="#" onClick={(event) => handleImageClick(event, 2)}>
                  <img src={image} alt={title} />
                </Link>
              </div>
              <div className={clsx(Styles.imgItem)}>
                <Link to="#" onClick={(event) => handleImageClick(event, 3)}>
                  <img src={image} alt={title} />
                </Link>
              </div>
              <div className={clsx(Styles.imgItem)}>
                <Link to="#" onClick={(event) => handleImageClick(event, 4)}>
                  <img src={image} alt={title} />
                </Link>
              </div>
            </div>
          </div>
          {/* card right */}
          <div className={clsx(Styles.productContent)}>
            <h2 className={clsx(Styles.productTitle)}>{title}</h2>
            <Link to="#" className={clsx(Styles.productLink)}>
              {category}
            </Link>
            <div className={clsx(Styles.productPrice)}>
              <p className={clsx(Styles.lastPrice)}>
                Giá cũ: <span>{oldPrice}</span>
              </p>
              <p className={clsx(Styles.newPrice)}>
                Giá: <span>{Price}</span>
              </p>
            </div>
            <div className={clsx(Styles.productDetail)}>
              <h2>Mô tả: </h2>
              <p>{title}</p>
              <p>
                MÁY CHỦ DELL POWEREDGE R750XS, INTEL XEON SILVER 4314, UP TO 8X3.5INCH/ 16GB RDIMM/ 2TB HDD NLSAS/ H755/
                IDRAC9 ENT/ DVD/ BRC 5720 QP 1GBE/ 2X800W PS/ QUICKSYNC2/ TPM 2.0_71015486 - WARRANTY 03 YEAR
              </p>
            </div>
            <div className={clsx(Home1.btn_wrapper)}>
              <button type="button" className="btn primaryBtn">
                Mua ngay
              </button>
              <button type="button" className={clsx(Home1.nhanbaogia_btn)}>
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductDetails;
