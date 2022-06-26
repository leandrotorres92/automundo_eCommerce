import "./Itemlistcontainer.css";
import ItemList from "../ItemList/ItemsList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemListContainer = ({ tittlePrimary }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const { brandId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = brandId
      ? query(collection(db, "products"), where("brand", "==", brandId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsFormatted = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(productsFormatted);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [brandId]);

  console.log(products);

  if (loading) {
    return (
      <>
        <h1 className="avisoEspera">Loading...</h1>
      </>
    );
  }

  return (
    <>
      <h1 className="tituloPrincipal">{tittlePrimary}</h1>
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <h1 className="avisoProximamente">Coming soon!!</h1>
      )}
    </>
  );
};

export default ItemListContainer;
