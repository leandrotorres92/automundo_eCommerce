import "./Cartwidget.css";
import logocar from "../CartWidget/logo_cart.png";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartWidget = () => {

  const { getCartQuantity } = useContext(CartContext);

  const totalQuantity = getCartQuantity();

  return (
    <button className="btnCarrito">
      <img src={logocar} alt="CartImg" />
      {totalQuantity}
    </button>
  );
};

export default CartWidget;
