import ProductDetail from "./../components/Product/ProductDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`).then(
      (res) => res.json()
    );
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
