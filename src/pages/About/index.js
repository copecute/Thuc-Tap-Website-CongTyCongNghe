import { Fragment } from "react";

// import ProductList from "components/ProductsList/ServerList";
import Section1 from './Section/1'
import Section2 from './Section/2'
import Section3 from './Section/3'

function About() {
    return (
        <Fragment>
            <Section1 />
            <Section2 />
            <Section3 />
        </Fragment>
      );
}

export default About;