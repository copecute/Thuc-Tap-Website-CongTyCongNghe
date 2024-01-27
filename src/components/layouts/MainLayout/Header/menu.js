import { React } from 'react';
import clsx from 'clsx';
import Styles from './Header.module.css';
import Dropdown from './dropdown';
import { Link, NavLink } from 'react-router-dom';

function Menu({ showMenu }) {
  return (
    <div className={clsx(Styles.nav__menu, showMenu && Styles.showMenu)}>
      <ul className={clsx(Styles.nav__list)}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? clsx(Styles.active, Styles.nav__link) : Styles.nav__link)}
          >
            Trang chủ
          </NavLink>
        </li>
        {/*=============== DROPDOWN 1 ===============*/}
        <Dropdown
          index="1"
          title="Emai Server"
          dropdownContent={
            <div className={clsx(Styles.dropdown__content)}>

              <Link to="#" className={clsx(Styles.dropdown__group)}>
                <div className={clsx(Styles.dropdown__icon)}>i</div>
                <span className={clsx(Styles.dropdown__title)}>Email Server Pro</span>
                <ul className="dropdown__list">
                  <li>Email theo thương hiệu doanh nghiệp</li>
                  <li>An toàn bảo mật vượt trội</li>
                  <li>Đáp ứng các yêu cầu phức tạp nhất</li>
                </ul>
              </Link>

              <Link to="#" className={clsx(Styles.dropdown__group)}>
                <div className={clsx(Styles.dropdown__icon)}>i</div>
                <span className={clsx(Styles.dropdown__title)}>Chữ Ký Số Email</span>
                <ul className={clsx(Styles.dropdown__list)}>
                  <li>Chống giả mạo</li>
                  <li>Chống sao chép</li>
                  <li>Được các chương trình email xác thực</li>
                </ul>
              </Link>

              <Link to="#" className={clsx(Styles.dropdown__group)}>
                <div className={clsx(Styles.dropdown__icon)}>i</div>
                <span className={clsx(Styles.dropdown__title)}>Quản Trị Email Server</span>
                <ul className={clsx(Styles.dropdown__list)}>
                  <li>Hỗ trợ kỹ thuật 24/7 với độ ưu tiên cao.</li>
                  <li>Đội ngũ chuyên viên về email đảm trách.</li>
                  <li>Hỗ trợ theo quy trình quy chuẩn khắc khe.</li>
                </ul>
              </Link>

            </div>
          }
        />
        {/*=============== DROPDOWN 2 ===============*/}
        <Dropdown
        index="2"
          title="Máy chủ"
          dropdownContent={
            <div className={clsx(Styles.dropdown__content)}>
              
              <Link to="#" className={clsx(Styles.dropdown__group)}>
                <div className={clsx(Styles.dropdown__icon)}>i</div>
                <span className={clsx(Styles.dropdown__title)}>
                  Thuê máy chủ
                </span>
                <ul className="dropdown__list">
                  <li>Hạ tầng ổn định</li>
                  <li>phần cứng mạnh mẽ</li>
                  <li>Ổn định tuyệt đối</li>
                </ul>
              </Link>

              <Link to="#" className={clsx(Styles.dropdown__group)}>
                <div className={clsx(Styles.dropdown__icon)}>i</div>
                <span className={clsx(Styles.dropdown__title)}>Mua máy chủ</span>
                <ul className={clsx(Styles.dropdown__list)}>
                  <li>Bộ não số hóa của doanh nghiệp</li>
                  <li>Chi phí hợp lý</li>
                  <li>Thi công nhanh chóng</li>
                </ul>
              </Link>

              <Link to="#" className={clsx(Styles.dropdown__group)}>
                <div className={clsx(Styles.dropdown__icon)}>i</div>
                <span className={clsx(Styles.dropdown__title)}>Thuê chỗ đặt máy chủ</span>
                <ul className={clsx(Styles.dropdown__list)}>
                  <li>Đường truyền tốc độ cao</li>
                  <li>Datacenter chuẩn quốc tế</li>
                  <li>Nhận báo giá ngay</li>
                </ul>
              </Link>
              
              <Link to="#" className={clsx(Styles.dropdown__group)}>
                <div className={clsx(Styles.dropdown__icon)}>i</div>
                <span className={clsx(Styles.dropdown__title)}>Quản trị máy chủ</span>
                <ul className={clsx(Styles.dropdown__list)}>
                  <li>Hỗ trợ và tư vấn các vấn đề server</li>
                  <li>Sửa chữa, bảo trì server nhanh chóng</li>
                </ul>
              </Link>

            </div>
          }
        />

        {/*=============== DROPDOWN 3 ===============*/}
        <Dropdown
        index="3"
          title="Dịch vụ"
          dropdownContent={
            <div className={clsx(Styles.dropdown__content)}>
              
              <Link to="#" className={clsx(Styles.dropdown__group)}>
                <div className={clsx(Styles.dropdown__icon)}>i</div>
                <span className={clsx(Styles.dropdown__title)}>Thiết kế Phần mềm</span>
                <ul className="dropdown__list">
                  <li>Bám sát nhu cầu</li>
                  <li>Đội ngũ giàu kinh ngiệm</li>
                  <li>Phát triển nhanh chóng</li>
                </ul>
              </Link>

              <Link to="#" className={clsx(Styles.dropdown__group)}>
                <div className={clsx(Styles.dropdown__icon)}>i</div>
                <span className={clsx(Styles.dropdown__title)}>Tổng đài số</span>
                <ul className={clsx(Styles.dropdown__list)}>
                  <li>Tự động hoá quy trình</li>
                  <li>Đàm thoại hội nghị.</li>
                  <li>đầu số đa dạng (1900/1800..)</li>
                </ul>
              </Link>

              <Link to="#" className={clsx(Styles.dropdown__group)}>
                <div className={clsx(Styles.dropdown__icon)}>i</div>
                <span className={clsx(Styles.dropdown__title)}>Chữ ký số</span>
                <ul className={clsx(Styles.dropdown__list)}>
                  <li>Chữ ký số USB TOKEN</li>
                  <li>Chữ ký số HSM</li>
                  <li>Chữ ký số HSM nội bộ</li>
                </ul>
              </Link>

              <Link className={clsx(Styles.dropdown__group)}>
                <div className={clsx(Styles.dropdown__icon)}>i</div>
                <span className={clsx(Styles.dropdown__title)}>Hoá đơn điện tử</span>
                <ul className={clsx(Styles.dropdown__list)}>
                  <li>Đáp ứng nghiệp vụ chứng từ</li>
                  <li>Xuất theo mẫu & xuất số lượng lớn</li>
                  <li>Theo dõi công nợ</li>
                </ul>
              </Link>

            </div>
          }
        />

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? clsx(Styles.nav__link, Styles.active) : Styles.nav__link)}
          >
            Giới thiệu
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
