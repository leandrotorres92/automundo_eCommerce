import CartWidget from "./CartWidget.js";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <a className="logoMenu" href="/">
          Automundo
        </a>
        <ul className="containerLista">
          <li>
            <a href="/">Vehiculos</a>
          </li>
          <li>
            <a href="/">Precios</a>
          </li>
          <li>
            <a href="/">Postventa</a>
          </li>
          <li>
            <a href="/">Financiacion</a>
          </li>
        </ul>
        <a href="/">{/*aca iria la imagen del boton buscar*/}</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
