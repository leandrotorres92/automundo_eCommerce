import "./Cartwidget.css";
import logocar from "../CartWidget/logo_cart.png";

const CartWidget = () => {
  return (
    <button className="btnCarrito">
      <img src={logocar} alt="" />
    </button>
  );
};

export default CartWidget;
