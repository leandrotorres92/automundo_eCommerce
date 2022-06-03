import "./Itemlistcontainer.css";
import { useState, useEffect } from "react";
import { getProducts } from "../CarProducts/CarProducts";
import ItemList from "../ItemList/ItemsList";

const ItemListContainer = ({ tittlePrimary }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);
  console.log(products);
  return (
    <div>
      <h1 className="tituloPrincipal">{tittlePrimary}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
