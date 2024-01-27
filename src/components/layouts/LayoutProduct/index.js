import Header from "components/layouts/MainLayout/Header";
import { Fragment } from "react";
function DefaultLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <div className="GiangContent">{children}</div>
    </Fragment>
  );
}

export default DefaultLayout;
