import { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    setProducts(res);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid w-full auto-rows-[1fr] grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {products.length > 0 &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
