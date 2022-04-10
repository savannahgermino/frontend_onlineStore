import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = () => {
    return(
        <div className="product">
            <img src="public/cookie.jpeg"></img>

            <h3>I'm a product!</h3>

            <label>$10.00</label>

            <QuantityPicker></QuantityPicker>

            <button className="btn btn-sm btn-primary">Add to cart</button>
        </div>
    );
};

export default Product;