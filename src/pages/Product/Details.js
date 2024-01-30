import React, { useState, useEffect, useRef, Fragment } from 'react';
import clsx from 'clsx';
import Styles from './Details.module.css';
import Home1 from 'pages/Home/Section/1.module.css';
import Link from 'components/Link'

function ProductDetails({ title, oldPrice, Price, category, image1, image2, image3, image4 }) {
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
      <div className={clsx(Styles.container)}>
        <div className={clsx(Styles.card)}>
          {/* card left */}
          <div className={clsx(Styles.productImgs)}>
            <div className={clsx(Styles.imgDisplay)}>
              <div className={clsx(Styles.imgShowcase)} ref={imgShowcaseRef}>
                <img src={image1} alt={title} />
                <img src={image2} alt={title} />
                <img src={image3} alt={title} />
                <img src={image4} alt={title} />
              </div>
            </div>
            <div className={clsx(Styles.imgSelect)}>
              <div className={clsx(Styles.imgItem)}>
                <Link to="#" onClick={(event) => handleImageClick(event, 1)}>
                  <img src={image1} alt={title} />
                </Link>
              </div>
              <div className={clsx(Styles.imgItem)}>
                <Link to="#" onClick={(event) => handleImageClick(event, 2)}>
                  <img src={image2} alt={title} />
                </Link>
              </div>
              <div className={clsx(Styles.imgItem)}>
                <Link to="#" onClick={(event) => handleImageClick(event, 3)}>
                  <img src={image3} alt={title} />
                </Link>
              </div>
              <div className={clsx(Styles.imgItem)}>
                <Link to="#" onClick={(event) => handleImageClick(event, 4)}>
                  <img src={image4} alt={title} />
                </Link>
              </div>
            </div>
          </div>
          {/* card right */}
          <div className={clsx(Styles.productContent)}>
            <h2 className={clsx(Styles.productTitle)}>{title}</h2>

            <div className={clsx(Styles.productPrice)}>
              <span className={clsx(Styles.price)}>{Price}</span>
              <span className={clsx(Styles.oldPrice)}>{oldPrice}</span>
            </div>

            <div className={clsx(Styles.Giang_0)}>
              <p className={clsx(Styles.Giang_1)}>
                <strong className={clsx(Styles.Giang_2)}>KHUYẾN MÃI TRỊ GIÁ 6.000.000₫</strong> Giá và khuyến mãi dự
                kiến áp dụng đến 30/09
              </p>
              <div className={clsx(Styles.Giang_3)}>
                <ul className={clsx(Styles.Giang_4)}>
                  <li className={clsx(Styles.Giang_5)}>
                    Mua online thêm quà: Giảm giá 3,000,000đ (Không áp dụng kèm Thu cũ đổi mới)
                  </li>
                  <li className={clsx(Styles.Giang_5)}>Giảm giá 3,000,000đ</li>
                  <li className={clsx(Styles.Giang_5)}>
                    Lên đời người yêu mới thời thượng, tài trợ đổi mới 3,000,000đ
                  </li>
                  <li className={clsx(Styles.Giang_5)}>
                    Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm khuyến mãi khác)
                  </li>
                  <li className={clsx(Styles.Giang_5)}>
                    Phụ kiện mua kèm giảm đến 20% (không áp dụng đồng thời KM khác).
                  </li>
                </ul>
                <div className={clsx(Styles.Giang_10)}>
                  <p className={clsx(Styles.Giang_11)}>Mua tại cửa hàng tặng thêm quà</p>
                  <ul className={clsx(Styles.Giang_12)}>
                    <li className={clsx(Styles.Giang_5)}>Tặng 100.000₫ mua hàng tại Cao Bằng</li>
                  </ul>
                </div>
              </div>
            </div>
            <p>
              Danh mục: <b>{category}</b>
            </p>
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

      <div className={clsx(Styles.container)}>
        <h3>CAM KẾT BÁN HÀNG</h3>
        <p>- Minh Giang PC cam kết mang đến cho quý khách hàng dịch vụ, sản phẩm tốt, an toàn nhất</p>
        <p>
          - Chữ tín luôn được đặt lên hàng đầu (với khách hàng, nhà cung cấp), luôn đứng về phía khách hàng để thấu hiểu
        </p>
        <p>- Đi kèm với chất lượng tốt, giá cả cạnh tranh nhất và những chế độ dịch vụ tốt nhất</p>
      </div>
    </Fragment>
  );
}

export default ProductDetails;
