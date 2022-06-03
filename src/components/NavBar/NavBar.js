import "./Navbar.css";
import navbarOptions from "../../helpers/menuStrings";
import CartWidget from "../CartWidget/CartWidget.js";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <a className="logoMenu" href="/">
          Automundo
        </a>
        <ul className="containerLista">
          {navbarOptions.map((navbarOp) => (
            <li>
              <a href="/">{navbarOp}</a>
            </li>
          ))}
        </ul>
        <a href="/">{/*aca iria la imagen del boton buscar*/}</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
