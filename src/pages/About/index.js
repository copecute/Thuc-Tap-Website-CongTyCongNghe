import { Fragment } from "react";

// import ProductList from "components/ProductsList/ServerList";
import Section1 from './Section/1'
import Section2 from './Section/2'
import Section3 from './Section/3'
import ContactForm from "./Section/Contact";

function About() {
    return (
        <Fragment>
            <Section1 />
            <Section2 />
            <Section3 />
            <ContactForm />
        </Fragment>
      );
}

export default About;