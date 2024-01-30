import clsx from 'clsx';
import Styles from './1.module.css';
// import Giang from 'assets/images/giang.png'
import { Link } from 'react-router-dom';
import SliderShow from 'components/SliderShow';

function Session1() {
  const images = [
    'https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg',
    'https://i.pinimg.com/736x/6d/7f/6d/6d7f6d16d3dd35f0eee515bacd8e4ade.jpg',
    'https://i.pinimg.com/736x/6e/74/63/6e7463744c9fdf25c505adfd51902f50.jpg',
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
          <div className={clsx(Styles.team_img_wrapper)}>
            <SliderShow images={images} />
            {/* <img src={Giang} alt="team-img" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Session1;
