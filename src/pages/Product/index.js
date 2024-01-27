import { Fragment } from "react";
import ProductDetails from "./Details";
import DellR750XS from 'assets/images/dell-poweredge-r750xs.png';

function Product() {
    return (
        <Fragment>
            <ProductDetails
            title="Máy chủ Dell PowerEdge R750XS"
            oldPrice="120.309.000đ "
            Price="100.309.000đ "
            category="Máy chủ"
            image={DellR750XS}
          />
        </Fragment>
      );
}

export default Product;