import { useContext } from "react";
import store from "../context/storeContext";
import ProductInCart from "./productInCart";

const Cart = () => {
  const cart = useContext(store.cart);

  return (
    <div>
      <h1>Your Cart</h1>
      <h5>Currently, you have {cart.length} products in the cart</h5>

      <div className="products">
        {cart.map((prod) => (
            <ProductInCart></ProductInCart>
        ))}
      </div>
    </div>
  );
};

export default Cart;
