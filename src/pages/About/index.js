import { Fragment } from "react";

import ProductList from "components/ProductsList/ServerList";
import Section1 from './Section/1'

function About() {
    return (
        <Fragment>
            <Section1 />
            <ProductList />
        </Fragment>
      );
}

export default About;