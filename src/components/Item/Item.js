import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, origen, price }) => {
  return (
    <div className="cards">
      <img src={img} alt={name} className="imgs" />
      <div className="namecar">{name}</div>
      <div className="origen">{origen}</div>
      <span className="price">{price}</span>
      <div className="seedetail">
        <Link to={`/detail/${id}`}>Ver Detalle</Link>
      </div>
    </div>
  );
};

export default Item;
