import clsx from 'clsx';
import Header from 'components/layouts/MainLayout/Header';
import Footer from 'components/layouts/MainLayout/Footer';
import { Fragment } from 'react';
import SlideBar from './SlideBar';
import RelatedProduct from './RelatedProduct';
import Styles from './Product.module.css';
function DefaultLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <div className="GiangContent">
        <div className={clsx(Styles.mainContent)}>
          <div className={clsx(Styles.left)}>
            {children}
            </div>
          <div className={clsx(Styles.right)}>
            <SlideBar />
          </div>
        </div>
        <RelatedProduct />
      </div>
      <Footer />
    </Fragment>
  );
}

export default DefaultLayout;
