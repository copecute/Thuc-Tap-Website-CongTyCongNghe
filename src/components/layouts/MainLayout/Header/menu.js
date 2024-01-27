import { Fragment, React } from 'react';
import clsx from 'clsx';
import Styles from './Header.module.css';
import Dropdown from './dropdown';
import { Link, NavLink } from 'react-router-dom';

function Menu({ showMenu }) {
  return (
    <Fragment>
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
                  <span className={clsx(Styles.dropdown__title)}>Thuê máy chủ</span>
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
          <li className={clsx(Styles.Cart)}>
          <Link to="#" className={clsx(Styles.nav__link)}>
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
              stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"
                d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
              />
              <path
              stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"
                d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
              />
              <path
              stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"
                d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7"
              />
            </svg>
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Menu;
