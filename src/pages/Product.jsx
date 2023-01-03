import ProductDetail from "./../components/Product/ProductDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTitle } from "./../hooks/useTitle";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const setTitle = useTitle();

  const getProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`).then(
      (res) => res.json()
    );
    setTitle(res.title);
    setProduct(res);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <>
      <h2 className="blind">Product Detail</h2>
      <ProductDetail product={product} />
    </>
  );
};

export default Product;
