import { Fragment } from "react";

import Session1 from "./Section/1";
import Session2 from "./Section/2";
import Products from "components/ProductsList";

function Home() {
    return (
        <Fragment>
            <Session1 />
            <Session2 />
            <Products />
        </Fragment>
      );
}

export default Home;