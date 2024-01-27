import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import { publicRoutes } from "./routes";
import { MainLayout } from "./components/layouts";

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = MainLayout;
            if (route.Layout) {
              Layout = route.Layout;
            } else if (route.Layout === null) {
              Layout = Fragment;
            }
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
