import { useState } from 'react';
import clsx from 'clsx';
import Styles from './Contact.module.css';

function ContactForm() {
  const [focusedInputs, setFocusedInputs] = useState({
    name: false,
    phoneNumber: false,
    email: false,
    message: false,
  });

  const focusFunc = (inputName) => {
    setFocusedInputs((prev) => ({ ...prev, [inputName]: true }));
  };

  const blurFunc = (inputName, e) => {
    if (e.target.value === '') {
      setFocusedInputs((prev) => ({ ...prev, [inputName]: false }));
    }
  };

  const sendBtnClick = () => {
    alert('Đã gửi!');
  };

  return (
    <section className={clsx(Styles.ContactForm)}>
      <div className={clsx(Styles.contactInfo)}>
        <h3 className={clsx(Styles.title)}>THÔNG TIN LIÊN HỆ</h3>
        <p className={clsx(Styles.text)}>Nếu bạn muốn hợp tác xin hãy liên hệ với chúng tôi theo địa chỉ</p>
        <div className={clsx(Styles.info)}>
          <div className={clsx(Styles.information)}>
            <p>Địa chỉ: Tổ dân phố 5, Hòa Thuận, Quảng Hòa, Cao Bằng</p>
          </div>
          <div className={clsx(Styles.information)}>
            <p>Email: admin@minhgiangpc.com</p>
          </div>
          <div className={clsx(Styles.information)}>
            <p>Số điện thoại: 088 888 9530</p>
          </div>
        </div>
        <div className={clsx(Styles.maps)}>
          <iframe
            title="Google Map"
            allowFullScreen=""
            loading="lazy"
            aria-hidden="false"
            height="350"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7370.728074445142!2d106.523148!3d22.528032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36ca7fcecdf6085f%3A0x58651069961268b!2zU-G7rWEgbcOheSB0w61uaCBDYW8gQuG6sW5nIC0gTWluaEdpYW5nUEM!5e0!3m2!1svi!2sus!4v1707103395498!5m2!1svi!2sus"
            tabIndex="0"
            width="100%"
          ></iframe>
        </div>
      </div>
      <div className={clsx(Styles.contactForm)}>
        <span className={clsx(Styles.circle, Styles.one)} />
        <span className={clsx(Styles.circle, Styles.two)} />
        <form className={clsx(Styles.form)} autoComplete="off">
          <h3 className={clsx(Styles.title)}>Biểu mẫu liên hệ</h3>
          <div className={clsx(Styles.inputContainer, focusedInputs.name && Styles.focus)}>
            <input
              type="text"
              name="name"
              className={clsx(Styles.input)}
              onFocus={() => focusFunc('name')}
              onBlur={(e) => blurFunc('name', e)}
            />
            <label htmlFor="name">Họ và tên</label>
            <span>Họ và tên</span>
          </div>
          <div className={clsx(Styles.inputContainer, focusedInputs.phoneNumber && Styles.focus)}>
            <input
              type="text"
              name="phoneNumber"
              className={clsx(Styles.input)}
              onFocus={() => focusFunc('phoneNumber')}
              onBlur={(e) => blurFunc('phoneNumber', e)}
            />
            <label htmlFor="phoneNumber">Số điện thoại</label>
            <span>Số điện thoại</span>
          </div>
          <div className={clsx(Styles.inputContainer, focusedInputs.email && Styles.focus)}>
            <input
              type="text"
              name="email"
              className={clsx(Styles.input)}
              onFocus={() => focusFunc('email')}
              onBlur={(e) => blurFunc('email', e)}
            />
            <label htmlFor="email">Email</label>
            <span>Email</span>
          </div>
          <div className={clsx(Styles.inputContainer, Styles.textarea, focusedInputs.message && Styles.focus)}>
            <textarea
              name="message"
              className={clsx(Styles.input)}
              defaultValue={''}
              onFocus={() => focusFunc('message')}
              onBlur={(e) => blurFunc('message', e)}
            />
            <label htmlFor="message">Nội dung</label>
            <span>Nội dung</span>
          </div>
          <input type="button" defaultValue="Gửi" onClick={sendBtnClick} className={clsx(Styles.btn)} />
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
