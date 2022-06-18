import "./ItemCount.css";
import { useState } from "react";

const Counter = ({ initial = 0, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="counter">
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={() => onAdd(count)}>Cotizar</button>
    </div>
  );
};

export default Counter;
