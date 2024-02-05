import clsx from 'clsx';
import Styles from './2.module.css';
import pic1 from 'assets/images/static-about-us-pic-1.png';

function Session3() {
  return (
    <section className={clsx(Styles.wrapper)} id='contact'>
      <div className={clsx(Styles.gridCols2)}>
        <div className={clsx(Styles.gridItem1)}>
          <h1 className={clsx(Styles.HeadingTitle)}>SƠ LƯỢC VỀ MINH GIANG PC</h1>
          <p className={clsx(Styles.infoText)}>
            Trải qua nhiều năm hoạt động từ khi mới thành lập, Minh Giang PC đã không ngừng phát triển và xây dựng uy
            tín vững chắc trong lòng khách hàng, từ chất lượng dịch vụ đến mức giá hợp lý. Trong thời gian hoạt động,
            Công ty công nghệ Minh Giang Protech Computer quyết định thực hiện việc đổi tên từ Trung Tâm Tin Học Minh
            Giang vào năm 2019, với mục tiêu trở thành đơn vị hàng đầu cung cấp máy tính chuyên dụng cao cấp tại Việt
            Nam, đồng thời là đầu tiên trong việc đón đầu xu hướng công nghệ mới và tư vấn giải pháp phần cứng máy tính
            tối ưu cho người sử dụng.
          </p>

        </div>

        <div className={clsx(Styles.gridItem2)}>
          <div className={clsx(Styles.Giang_img_wrapper)}>
            <img
              src={pic1}
              alt="Minh Giang Protech Computer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Session3;
