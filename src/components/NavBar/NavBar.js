import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget.js";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <li className="logoMenu">Automundo</li>
        <ul className="containerLista">
          <li>
            <Link to="/">All Cars</Link>
            <Link to="/marca/Jeep">Jeep</Link>
            <Link to="/marca/Land Rover">Land Rover</Link>
            <Link to="/marca/Chery">Chery</Link>
            <Link to="/marca/Geely">Geely</Link>
          </li>
        </ul>
        <a href="/">{/*aca iria la imagen del boton buscar*/}</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
