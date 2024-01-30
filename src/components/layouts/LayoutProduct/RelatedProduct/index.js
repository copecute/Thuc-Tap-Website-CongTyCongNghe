import clsx from 'clsx';
import Styles from './RelatedProduct.module.css';
import Product from 'components/ProductsList/Product';
import { Fragment } from 'react';

function RelatedProduct() {
  return (
    <Fragment>
      <div className={clsx(Styles.products)}>
        <h2>Sản phẩm liên quan:</h2>
        <div className={clsx(Styles.productItems)}>
          <Product
            title="Máy chủ Dell PowerEdge R750XS"
            oldPrice="120.309.000đ "
            Price="100.309.000đ "
            category="Máy chủ"
            star="⭐⭐⭐⭐"
            image1="https://i.imgur.com/sNU0kLT.png"
            image2="https://i.imgur.com/sNU0kLT.png"
            image3="https://i.imgur.com/sNU0kLT.png"
            image4="https://i.imgur.com/sNU0kLT.png"
          />

          <Product
            title="Máy chủ Dell PowerEdge T350"
            oldPrice="65.590.000đ"
            Price="63.690.000đ"
            category="Máy chủ"
            star="⭐⭐⭐"
            image1="https://i.imgur.com/bYxDA22.png"
            image2="https://i.imgur.com/tbsokkz.png"
            image3="https://i.imgur.com/HIVYMek.png"
            image4="https://i.imgur.com/Lij7hIk.png"
          />

          <Product
            title="Máy chủ lắp ráp - I9 13900K/ 128GB Ram/ 2TB SSD/ RTX 4080 16GB"
            oldPrice="80.000.000đ "
            Price="50.000.000đ "
            category="Máy chủ"
            star="⭐⭐⭐⭐"
            image1="https://i.imgur.com/pPow29r.png"
            image2="https://i.imgur.com/nuHfOUR.png"
            image3="https://i.imgur.com/mI3bX3K.png"
            image4="https://i.imgur.com/nuHfOUR.png"
          />

          <Product
            title="Máy chủ lắp ráp - I9 13900K/ 128GB Ram/ 2TB SSD/ RTX 4080 16GB"
            oldPrice="80.000.000đ "
            Price="50.000.000đ "
            category="Máy chủ"
            star="⭐⭐⭐⭐"
            image1="https://i.imgur.com/pPow29r.png"
            image2="https://i.imgur.com/nuHfOUR.png"
            image3="https://i.imgur.com/mI3bX3K.png"
            image4="https://i.imgur.com/nuHfOUR.png"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default RelatedProduct;
