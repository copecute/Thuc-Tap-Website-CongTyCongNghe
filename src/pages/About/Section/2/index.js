import clsx from 'clsx';
import Styles from './2.module.css';
import iconCamera from 'assets/images/icons/camera.svg';
import iconDataProcess from 'assets/images/icons/data-process.svg';
import iconMaintenance from 'assets/images/icons/maintenance.svg';
import iconTraining from 'assets/images/icons/training.svg';
import iconProgrammingDevelopment from 'assets/images/icons/programming-development.svg';
import iconDevices from 'assets/images/icons/devices.svg';


function Section1() {
  return (
    <section className={clsx(Styles.services)}>
      <h1 className={clsx(Styles.HeadingTitle)}>CÁC LĨNH VỰC KINH DOANH</h1>
      <p className={clsx(Styles.textLight)}>
        Đặc biệt trong lĩnh vực công nghệ, Minh Giang PC chú trọng các hoạt động như:
      </p>

      <div className={clsx(Styles.servicesList)}>
        <div className={clsx(Styles.servicesItem)}>
          <div className={clsx(Styles.itemIcon)}>
            <img src={iconDevices} alt="Cung cấp thiết bị" />
          </div>
          <h5 className={clsx(Styles.itemTitle)}>Cung cấp Thiết bị</h5>
          <p className={clsx(Styles.text)}>
            Máy chủ, máy tính đồ họa, máy tính workstation, máy tính văn phòng và các linh kiện máy tính.
          </p>
        </div>
        <div className={clsx(Styles.servicesItem)}>
          <div className={clsx(Styles.itemIcon)}>
            <img src={iconProgrammingDevelopment} alt="Thiết kế giải pháp tổng thể" />
          </div>
          <h5 className={clsx(Styles.itemTitle)}>Thiết kế giải pháp tổng thể</h5>
          <p className={clsx(Styles.text)}>Thiết kế hệ thống, xây dựng mạng LAN, WAN, thiết kế phần mềm, website..</p>
        </div>
        <div className={clsx(Styles.servicesItem)}>
          <div className={clsx(Styles.itemIcon)}>
            <img src={iconTraining} alt="Tư vấn và đào tạo cho khách hàng." />
          </div>
          <h5 className={clsx(Styles.itemTitle)}>Tư vấn và đào tạo cho khách hàng.</h5>
          <p className={clsx(Styles.text)}>Đào tạo kỹ năng sử dụng thiết bị, phần mềm chuyên môn cho khách hàng</p>
        </div>
        <div className={clsx(Styles.servicesItem)}>
          <div className={clsx(Styles.itemIcon)}>
            <img src={iconMaintenance} alt="Bảo trì sửa chữa" />
          </div>
          <h5 className={clsx(Styles.itemTitle)}>Bảo trì sửa chữa</h5>
          <p className={clsx(Styles.text)}>
            Bảo trì, sửa chữa tận nơi các hệ thống mạng, hệ thống máy chủ, phần mềm,...
          </p>
        </div>
        <div className={clsx(Styles.servicesItem)}>
          <div className={clsx(Styles.itemIcon)}>
            <img src={iconDataProcess} alt="Xử lý dữ liệu" />
          </div>
          <h5 className={clsx(Styles.itemTitle)}>Xử lý dữ liệu</h5>
          <p className={clsx(Styles.text)}>Xử lý dữ liệu số và dịch vụ khác liên quan đến máy vi tính;</p>
        </div>
        <div className={clsx(Styles.servicesItem)}>
          <div className={clsx(Styles.itemIcon)}>
            <img src={iconCamera} alt="camera cctv" />
          </div>
          <h5 className={clsx(Styles.itemTitle)}>Camera</h5>
          <p className={clsx(Styles.text)}>Thiết kế và thi công hệ thống CCTV Camera giám sát quy mô nhỏ, vừa và lớn</p>
        </div>
      </div>
    </section>
  );
}

export default Section1;
