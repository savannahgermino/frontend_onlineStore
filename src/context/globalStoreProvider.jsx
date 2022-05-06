import store from "./storeContext";
import { useState } from "react";

const GlobalStoreProvider = (props) => {
  let [cart, setCart] = useState([]);
  let [mockUser, setMockUser] = useState({ id: 42, email: "sav@gmail.com" });

  let addProdToCart = (prod) => {
    console.log("Adding prod");

    let copy = [...cart];
    copy.push(prod);
    setCart(copy);
  };

  let removeProdFromCart = () => {
    console.log("Removing prod");
  };

  return (
    <store.Provider
      value={{
        cart: cart,
        user: mockUser,
        addProdToCart: addProdToCart,
        removeProdFromCart: removeProdFromCart,
      }}
    >
      {props.children}
    </store.Provider>
  );
};

export default GlobalStoreProvider;
