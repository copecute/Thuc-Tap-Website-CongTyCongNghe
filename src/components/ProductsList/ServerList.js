import clsx from 'clsx';
import { Fragment, useState } from 'react';
import Style from './ProductsList.module.css';
import Product from './Product';
import loading from 'assets/images/loading.svg';

import Link from 'components/Link';
function ServerList() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      alert('Không có sản phẩm!');
      setIsLoading(false);
    }, 3000);
  };
  return (
    <Fragment>
      <div className={clsx(Style.products)}>
        <h1 className={clsx(Style.HeadingTitle)}>Máy chủ cao cấp</h1>
        <p className={clsx(Style.textLight)}>
          <strong>Minh Giang Protect Computer</strong> nhà phân phối chính thức sản phẩm Server cao cấp chính hãng Dell,
          Intel, IBM. Sự lựa chọn tốt nhất về Server với chi phí hợp lý, sản phẩm đáng tin cậy, phục vụ chuyên nghiệp
        </p>
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

        <div className={clsx(Style.loadMore)}>
          <Link to="#" className="btn primaryBtn" onClick={handleClick}>
            {isLoading ? <img src={loading} width={'50px'} height={'50px'} alt="Loading" /> : 'Xem thêm'}
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default ServerList;
