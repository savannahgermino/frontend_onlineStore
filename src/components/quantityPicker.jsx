import React from 'react';
import "./quantityPicker.css";

const QuantityPicker = () => {
    let [quantity, setQuantity] = React.useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        let nextQuantity = quantity - 1;
        if(nextQuantity > 0){
        setQuantity(quantity - 1);
        }
    };

    return(
        <div className="quantity-picker">
            <button onClick={handleIncrease} className="btn btn-sm btn-dark">
                +
            </button>

            <label>{quantity}</label>

            <button onClick={handleDecrease} className="btn btn-sm btn-dark">
                -
            </button>
        </div>
    );
};

export default QuantityPicker;
