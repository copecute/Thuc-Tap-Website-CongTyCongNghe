import { Link } from 'react-router-dom';
import clsx from 'clsx';

import Style from './ProductsList.module.css';


function Product({ title, oldPrice, Price, category, star, image }) {
  return (
    <div className={clsx(Style.product)}>
      <div className={clsx(Style.productContent)}>
        <div className={clsx(Style.productImg)}>
          <img src={image} alt={title} />
        </div>
        <div className={clsx(Style.productBtns)}>
          <Link to="/product" className={clsx(Style.btnCart)}>
            Thêm vào giỏ
          </Link>
          <Link to="/product" className={clsx(Style.btnBuy)}>
            Mua Ngay
          </Link>
        </div>
      </div>
      <div className={clsx(Style.productInfo)}>
        <div className={clsx(Style.productInfoTop)}>
          <h2 className={clsx(Style.smTitle)}>{category}</h2>
          <div className={clsx(Style.rating)}>
            <span>{star}</span>
          </div>
        </div>
        <Link to="/product" className={clsx(Style.productName)}>
          {title}
        </Link>
        <p className={clsx(Style.productPrice)}>{oldPrice}</p>
        <p className={clsx(Style.productPrice)}>{Price}</p>
      </div>
      <div className={clsx(Style.offInfo)}>
        <h2 className={clsx(Style.smTitle)}>Giảm giá 17%</h2>
      </div>
    </div>
  );
}

export default Product;
