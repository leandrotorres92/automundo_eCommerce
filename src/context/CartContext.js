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

  const clearCart = () => {
    setCart([]);
  };

  const getCartQuantity = () => {
    let totalQuantity = 0;

    cart.forEach((prod) => {
      totalQuantity += prod.quantity;
    });

    return totalQuantity;
  };

  const totalToPay = () => {
    let total = 0;
    cart.forEach((prod) => {
      total = prod.quantity * prod.price;
    });

    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalToPay,
        addItem,
        removeItem,
        getCartQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
