import carrito from "../img/logocar.png";

const CartWidget = () => {
  return (
    <button className="btnCarrito">
      <img src={carrito} alt="" />
    </button>
  );
};

export default CartWidget;
