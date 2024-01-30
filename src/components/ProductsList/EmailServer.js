import clsx from 'clsx';
import { Fragment, useState } from 'react';
import Style from 'components/ProductsList/ProductsList.module.css';
import Product from './Product';
import loading from 'assets/images/loading.svg';

import Link from 'components/Link';
function EmailServer() {
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
        <h1 className={clsx(Style.HeadingTitle)}>Email Server</h1>
        <p className={clsx(Style.textLight)}>
          Email theo thương hiệu doanh nghiệp An toàn bảo mật vượt trội Đáp ứng các yêu cầu phức tạp nhất
        </p>
        <div className={clsx(Style.productItems)}>
          <Product
            title="Email Server 1"
            oldPrice="649.000đ / tháng"
            Price="520.000đ / tháng"
            category="500 Account, 200 GB"
            star="1 Domain"
            image1="https://i.imgur.com/0szwxLT.png"
            image2="https://i.imgur.com/0szwxLT.png"
            image3="https://i.imgur.com/0szwxLT.png"
            image4="https://i.imgur.com/0szwxLT.png"
          />

          <Product
            title="Email Server 2"
            oldPrice="1049.000đ / tháng"
            Price="720.000đ / tháng"
            category="1000 Account, 500 GB"
            star="2 Domain"
            image1="https://i.imgur.com/0szwxLT.png"
            image2="https://i.imgur.com/0szwxLT.png"
            image3="https://i.imgur.com/0szwxLT.png"
            image4="https://i.imgur.com/0szwxLT.png"
          />

          <Product
            title="Email Server 3"
            oldPrice="1649.000đ / tháng"
            Price="1020.000đ / tháng"
            category="1500 Account, 900 GB"
            star="5 Domain"
            image1="https://i.imgur.com/0szwxLT.png"
            image2="https://i.imgur.com/0szwxLT.png"
            image3="https://i.imgur.com/0szwxLT.png"
            image4="https://i.imgur.com/0szwxLT.png"
          />

          <Product
            title="Email Server 4"
            oldPrice="1649.000đ / tháng"
            Price="1020.000đ / tháng"
            category="1500 Account, 900 GB"
            star="5 Domain"
            image1="https://i.imgur.com/0szwxLT.png"
            image2="https://i.imgur.com/0szwxLT.png"
            image3="https://i.imgur.com/0szwxLT.png"
            image4="https://i.imgur.com/0szwxLT.png"
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

export default EmailServer;
