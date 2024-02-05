import React, { Fragment } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Correct import
import ProductDetails from './Details';

const Product = () => {
  // Trích xuất các tham số truy vấn khác từ URL sử dụng `useLocation` và `URLSearchParams`
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  // Sử dụng hàm getParam để trích xuất giá trị tham số một cách linh hoạt
  const getParam = (paramName) => params.get(paramName) || '';

  return (
    <Fragment>
            <ul className="breadcrumb">
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="#">Sản phẩm</Link>
        </li>
        <li>
          <Link to="#">{getParam('category') || 'Máy Chủ Lắp Ráp - I9 13900K/ 128GB Ram/ 2TB SSD/ RTX 4080 16GB'}</Link>
        </li>
        <li>
          <Link to="#">{getParam('title') || 'Máy chủ'}</Link>
        </li>
      </ul>

    <ProductDetails
      title={getParam('title') || 'Máy Chủ Lắp Ráp - I9 13900K/ 128GB Ram/ 2TB SSD/ RTX 4080 16GB'}
      oldPrice={getParam('oldPrice') || '80.000.000đ'}
      Price={getParam('Price') || '50.000.000đ'}
      category={getParam('category') || 'Máy chủ'}
      image1={getParam('image1') || '/assets/images/products/server/product-3-1.png'}
      image2={getParam('image2') || '/assets/images/products/server/product-3-2.png'}
      image3={getParam('image3') || '/assets/images/products/server/product-3-3.png'}
      image4={getParam('image4') || '/assets/images/products/server/product-3-4.png'}
    />
    </Fragment>
  );
};

export default Product;
