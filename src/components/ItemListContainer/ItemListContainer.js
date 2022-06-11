import "./Itemlistcontainer.css";
import { useState, useEffect } from "react";
import { getProducts, getProductsByMarca } from "../CarProducts/CarProducts";
import ItemList from "../ItemList/ItemsList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ tittlePrimary }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const { marcaId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (!marcaId) {
      getProducts()
        .then((response) => {
          setProducts(response);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getProductsByMarca(marcaId)
        .then((response) => setProducts(response))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [marcaId]);

  console.log(products);

  if (loading) {
    return (
      <div className="aviso">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <h1 className="tituloPrincipal">{tittlePrimary}</h1>
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <h1 className="aviso">Coming soon!!</h1>
      )}
    </>
  );
};

export default ItemListContainer;
