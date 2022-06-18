import { useState, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    if (!cart.some((prod) => prod.id === productToAdd.id)) {
      setCart([...cart, productToAdd]);
    }
  };

  const removeItem = (id) => {
    const cartWithoutProduct = cart.filter((prod) => prod.id !== id);
    setCart(cartWithoutProduct);
  };

  const getCartQuantity = () => {
    let totalQuantity = 0;

    cart.forEach((prod) => {
      totalQuantity += prod.quantity;
    });

    return totalQuantity;
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, getCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
