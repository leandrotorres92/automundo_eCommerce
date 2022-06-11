import "./ItemDetail.css";

const ItemDetail = ({ name, img, price, description }) => {
  return (
    <>
      <img src={img} alt={name} className="detailImgs" />
      <div>
        <h1 className="detailName">{name}</h1>
        <hr></hr>
        <div className="detailDescription">
          <h3>Descripcion</h3>
          <br></br>
          <p>{description}</p>
        </div>
        <span className="detailPrice">{price}</span>
      </div>
    </>
  );
};

export default ItemDetail;
