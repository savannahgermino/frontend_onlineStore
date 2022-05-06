import "./productInCart.css";

const ProductInCart = (props) => {

    const getTotal = () => {
        return "$" + (props.info.quantity * props.info.price).toFixed(2);
    }
  return (
    <div className="prod-cart">
        /** add image **/

      <h6>{props.info.title}</h6>

      <label>{props.info.price}</label>
      <label>{props.info.quantity}</label>
      <label>{props.info.quantity * props.info.price}</label>

      <button className="btn btn-sm btn-danger">Delete</button>
    </div>
  );
};

export default ProductInCart;
