import Header from "./Header";
import Footer from "./Footer";
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
