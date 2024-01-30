import Link from 'components/Link'
import clsx from 'clsx';

import Style from 'components/ProductsList/ServerList/ProductsList.module.css';


function Product({ title, oldPrice, Price, category, star, image1, image2, image3, image4 }) {
  const linkProduct = `/product?title=${title}&category=${category}&image1=${image1}&image2=${image2}&image3=${image3}&image4=${image4}&oldPrice=${oldPrice}&Price=${Price}`;
  
  // tính phần trăm giảm giá
  const oldPriceNumber = parseFloat(oldPrice.replace('đ', '').replace(/\./g, '').replace(',', '.'));
  const PriceNumber = parseFloat(Price.replace('đ', '').replace(/\./g, '').replace(',', '.'));

  const phanTramGiamGia = ((oldPriceNumber - PriceNumber) / oldPriceNumber) * 100;
  return (
    <div className={clsx(Style.product)}>
      <div className={clsx(Style.productContent)}>
        <div className={clsx(Style.productImg)}>
          {<img src={image1} alt={title} />}
        </div>
        <div className={clsx(Style.productBtns)}>
          <Link to={linkProduct} className={clsx(Style.btnCart)}>
            Thêm vào giỏ
          </Link>
          <Link to={linkProduct} className={clsx(Style.btnBuy)}>
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
        <Link to={linkProduct} className={clsx(Style.productName)}>
          {title}
        </Link>
        <p className={clsx(Style.productPrice)}>{oldPrice}</p>
        <p className={clsx(Style.productPrice)}>{Price}</p>
      </div>
      <div className={clsx(Style.offInfo)}>
        <h2 className={clsx(Style.smTitle)}>Giảm giá {phanTramGiamGia.toFixed(0)}%</h2>
      </div>
    </div>
  );
}

export default Product;
