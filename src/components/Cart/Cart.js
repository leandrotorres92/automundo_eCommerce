import "./Cart.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, getCartQuantity, clearCart, totalToPay } = useContext(CartContext);

  const quantity = getCartQuantity();

  if (quantity === 0) {
    return <h1 className="cartTittle">No hay productos en la lista...</h1>;
  }

  return (
    <div className="containerCart">
      <h1 className="cartTittle">Cart</h1>
      <div className="containerCartItems">
        {cart.map((prod) => (
          <CartItem key={prod.id} {...prod} />
        ))}
      </div>
      <div>
        <p>Total: $ {totalToPay()}</p>
      </div>
      <button className="buttonClear" onClick={() => clearCart()}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
