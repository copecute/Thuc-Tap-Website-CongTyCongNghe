import clsx from 'clsx';
import Styles from './1.module.css';
import Link from 'components/Link'
import SliderShow from 'components/SliderShow';

function Session1() {
  const SliderShowImages = [
    'https://sieuthiserver.vn/wp-content/uploads/2023/02/Hunonic.jpg',
    'https://sieuthiserver.vn/wp-content/uploads/2023/04/tang-tai-nghe.jpg',
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
              to="/product?title=Máy%20chủ%20Dell%20PowerEdge%20R750XS&category=Máy%20chủ&image1=https://i.imgur.com/sNU0kLT.png&image2=https://i.imgur.com/sNU0kLT.png&image3=https://i.imgur.com/sNU0kLT.png&image4=https://i.imgur.com/sNU0kLT.png&oldPrice=120.309.000đ%20&Price=100.309.000đ"
              className="btn primaryBtn"
            >
              Xem sản phẩm
            </Link>
            <button className={clsx(Styles.nhanbaogia_btn)}>Nhận báo giá</button>
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
