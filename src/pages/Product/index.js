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
            <ul class="breadcrumb">
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="#">Sản phẩm</Link>
        </li>
        <li>
          <Link to="#">{getParam('category')}</Link>
        </li>
        <li>
          <Link to="#">{getParam('title')}</Link>
        </li>
      </ul>

    <ProductDetails
      title={getParam('title')}
      oldPrice={getParam('oldPrice')}
      Price={getParam('Price')}
      category={getParam('category')}
      image1={getParam('image1')}
      image2={getParam('image2')}
      image3={getParam('image3')}
      image4={getParam('image4')}
    />
    </Fragment>
  );
};

export default Product;
