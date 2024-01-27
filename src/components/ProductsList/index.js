import clsx from 'clsx';
import { Fragment, useState} from 'react';
import Style from './ProductsList.module.css';
import Product from './Product';
import loading from 'assets/images/loading.svg';

import DellR750XS from 'assets/images/dell-poweredge-r750xs.png';
import { Link } from 'react-router-dom';
function Products() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      alert('Không có sản phẩm!')
      setIsLoading(false);
    }, 3000);
  };
  return (
    <Fragment>
      <div className={clsx(Style.products)}>
        <h1 className={clsx(Style.HeadingTitle)}>Máy chủ cao cấp</h1>
        <p className={clsx(Style.textLight)}>
        <strong>Minh Giang Protect Computer</strong> nhà phân phối chính thức sản phẩm Server cao cấp chính hãng Dell, Intel, IBM.
Sự lựa chọn tốt nhất về Server với chi phí hợp lý, sản phẩm đáng tin cậy, phục vụ chuyên nghiệp
        </p>
        <div className={clsx(Style.productItems)}>
          <Product
            title="Máy chủ Dell PowerEdge R750XS"
            oldPrice="120.309.000đ "
            Price="100.309.000đ "
            category="Máy chủ"
            star="⭐⭐⭐⭐"
            image={DellR750XS}
          />

          <Product
            title="Máy chủ Dell PowerEdge R750XS"
            oldPrice="120.309.000đ "
            Price="100.309.000đ "
            category="Máy chủ"
            star="⭐⭐⭐⭐"
            image={DellR750XS}
          />

          <Product
            title="Máy chủ Dell PowerEdge R750XS"
            oldPrice="120.309.000đ "
            Price="100.309.000đ "
            category="Máy chủ"
            star="⭐⭐⭐⭐"
            image={DellR750XS}
          />

          <Product
            title="Máy chủ Dell PowerEdge R750XS"
            oldPrice="120.309.000đ "
            Price="100.309.000đ "
            category="Máy chủ"
            star="⭐⭐⭐⭐"
            image={DellR750XS}
          />

          <Product
            title="Máy chủ Dell PowerEdge R750XS"
            oldPrice="120.309.000đ "
            Price="100.309.000đ "
            category="Máy chủ"
            star="⭐⭐⭐⭐"
            image={DellR750XS}
          />

          <Product
            title="Máy chủ Dell PowerEdge R750XS"
            oldPrice="120.309.000đ "
            Price="100.309.000đ "
            category="Máy chủ"
            star="⭐⭐⭐⭐"
            image={DellR750XS}
          />
        </div>

        <div className={clsx(Style.loadMore)}>
          <Link to="#" className="btn primaryBtn" onClick={handleClick}>
            {isLoading ? <img src={loading} width={'50px'} height={'50px'} alt='Loading'/> : 'Xem thêm'}
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Products;
