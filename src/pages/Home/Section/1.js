import clsx from 'clsx';
import Styles from './1.module.css';
import Link from 'components/Link'
import SliderShow from 'components/SliderShow';

import SliderShow1 from 'assets/images/SliderShow1.jpg';
import SliderShow2 from 'assets/images/SliderShow2.jpg';

function Session1() {
  const SliderShowImages = [
    SliderShow1,
    SliderShow2,
  ];
  
  return (
    <section className={clsx(Styles.wrapper)}>
      <div className={clsx(Styles.gridCols2)}>
        <div className={clsx(Styles.gridItem1)}>
          <h1 className={clsx(Styles.mainHeading)}>
            Minh Giang Protech Computer
            <br />
            WEB, EMAIL & MÁY CHỦ CHUYÊN NGHIỆP
          </h1>
          <p className={clsx(Styles.infoText)}>
            Cho thuê máy chủ giá rẻ với phần cứng mạnh mẽ, ổn định tuyệt đối, hỗ trợ kỹ thuật 24/7
          </p>
          <div className={clsx(Styles.btn_wrapper)}>
            <Link
              to="/product"
              className="btn primaryBtn"
            >
              Xem sản phẩm
            </Link>
            <Link to="/about" className={clsx(Styles.nhanbaogia_btn)}>Nhận báo giá</Link>
          </div>
        </div>
        <div className={clsx(Styles.gridItem2)}>
          <div className={clsx(Styles.Giang_img_wrapper)}>
            <SliderShow images={SliderShowImages} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Session1;
