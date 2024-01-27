import Header from "components/layouts/MainLayout/Header";
import Footer from "components/layouts/MainLayout/Footer";
import { Fragment } from "react";
function DefaultLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <div className="GiangContent">{children}</div>
      <Footer />
    </Fragment>
  );
}

export default DefaultLayout;
