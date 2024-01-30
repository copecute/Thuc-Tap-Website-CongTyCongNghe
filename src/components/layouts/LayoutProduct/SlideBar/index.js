import clsx from 'clsx';
import Styles from './SlideBar.module.css';

import mienPhiVanChuyenIcon from 'assets/images/icons/mienphivanchuyen.png';
import hoanLaiTien100Icon from 'assets/images/icons/hoanlaitien100.png';
import chinhSachBaoHanhIcon from 'assets/images/icons/chinhsachbaohanh.png';
import hoTroTrucTuyenIcon from 'assets/images/icons/hotrotructuyen.png';

function SlideBar() {
  return (
    <div className={clsx(Styles.Giang_0)}>

              <div className={clsx(Styles.Giang_5)}>
                <div className={clsx(Styles.Giang_6)}>
                <img alt="Miễn phí vận chuyển" src={mienPhiVanChuyenIcon} />
                  <div className={clsx(Styles.Giang_9)}>
                    <h5 className={clsx(Styles.Giang_10)}>MIỄN PHÍ VẬN CHUYỂN</h5>
                    <p className={clsx(Styles.Giang_11)}>Giao hàng miễn phí đơn hàng từ 2 triệu.</p>
                  </div>
                </div>
              </div>

              <div className={clsx(Styles.Giang_12)}>
                <hr className={clsx(Styles.Giang_13)} />
              </div>

              <div className={clsx(Styles.Giang_5)}>
                <div className={clsx(Styles.Giang_6)}>
                <img alt="Miễn phí vận chuyển" src={hoanLaiTien100Icon} />
                  <div className={clsx(Styles.Giang_9)}>
                    <h5 className={clsx(Styles.Giang_10)}>HOÀN LẠI TIỀN 100%</h5>
                    <p className={clsx(Styles.Giang_11)}>Hoàn tiền lại 100% nếu sản phẩm bị lỗi</p>
                  </div>
                </div>
              </div>

              <div className={clsx(Styles.Giang_12)}>
                <hr className={clsx(Styles.Giang_13)} />
              </div>

              <div className={clsx(Styles.Giang_5)}>
                <div className={clsx(Styles.Giang_6)}>
                <img alt="Miễn phí vận chuyển" src={chinhSachBaoHanhIcon} />
                  <div className={clsx(Styles.Giang_9)}>
                    <h5 className={clsx(Styles.Giang_10)}>CHÍNH SÁCH BẢO HÀNH</h5>
                    <p className={clsx(Styles.Giang_11)}>Bảo hành 12 tháng, đổi trả 15 ngày.</p>
                  </div>
                </div>
              </div>

              <div className={clsx(Styles.Giang_12)}>
                <hr className={clsx(Styles.Giang_13)} />
              </div>

              <div className={clsx(Styles.Giang_5)}>
                <div className={clsx(Styles.Giang_6)}>
                <img alt="Miễn phí vận chuyển" src={hoTroTrucTuyenIcon} />
                  <div className={clsx(Styles.Giang_9)}>
                    <h5 className={clsx(Styles.Giang_10)}>HỖ TRỢ TRỰC TUYẾN</h5>
                    <p className={clsx(Styles.Giang_11)}>Hỗ trợ trực tuyến các ngày trong tuần kể cả ngày lễ</p>
                  </div>
                </div>
              </div>
              
            </div>
  );
}

export default SlideBar;
