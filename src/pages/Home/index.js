import { Fragment } from "react";

import Session1 from "./Section/1";
import Session2 from "./Section/2";
import ServerList from "components/ProductsList/ServerList";
import EmailServer from "components/ProductsList/EmailServer";

function Home() {
    return (
        <Fragment>
            <Session1 />
            <Session2 />
            <ServerList />
            <EmailServer />
        </Fragment>
      );
}

export default Home;