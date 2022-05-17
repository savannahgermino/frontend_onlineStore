import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useContext, useState } from "react";
import store from "../context/storeContext";

const Product = (props) => {
    const [quantity, setQuantity] = useState(1);
    let addProdToCart = useContext(store).addProdToCart;

    const handleQuantityChange = (val) => {
        console.log("The quantity changed!", val);
        setQuantity(val);
    };

    const handleAdd = () => {
        let prod = {...props.info, quantity: quantity};
        addProdToCart(prod);
    };

    return (
        <div className="product">
            <img src={"/images/" + props.info.image} alt="Product" ></img>

            <h3>{props.info.title}</h3>

            <div className="prices">
                <label className="total">
                    <span><b>Total: </b></span> ${(props.info.price * quantity).toFixed(2)}
                </label>
                <label className="price">
                    <span><b>Price: </b></span>${(props.info.price * 1).toFixed(2)}
                </label>
            </div>

            <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>

            <button className={handleAdd} className="btn btn-sm btn-primary"> Add to cart</button>
        </div>
    );
};

export default Product;