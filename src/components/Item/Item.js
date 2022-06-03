import "./Item.css";

const Item = ({ name, img, origen, precio }) => {
  return (
    <>
      <div className="cards">
        <img src={img} alt="" className="imgs" />
        <div className="namecar">{name}</div>
        <div className="origen">{origen}</div>
        <span className="price">{precio}</span>
      </div>
    </>
  );
};

export default Item;
