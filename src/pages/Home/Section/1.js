import clsx from "clsx";
import Styles from './1.module.css'
import Giang from 'assets/images/giang.png'
import { Link } from "react-router-dom";

function Session1() {
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
          <Link to="/about" className='btn primaryBtn'>
            Xem sản phẩm
          </Link>
          <button className={clsx(Styles.nhanbaogia_btn)}>Nhận báo giá</button>
        </div>
      </div>
      <div className={clsx(Styles.gridItem2)}>
        <div className={clsx(Styles.team_img_wrapper)}>
          <img src={Giang} alt="team-img" />
        </div>
      </div>
    </div>
</section>

     );
}

export default Session1;