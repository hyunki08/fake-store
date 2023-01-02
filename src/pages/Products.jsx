import { useLocation, useParams } from "react-router-dom";
import ProductList from "./../components/Products/ProductList";
import { useEffect, useState } from "react";
import { NavMenu } from "../constants/Nav";

const Products = () => {
  const location = useLocation();
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  const getProductsAll = async () => {
    const res = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    setProducts(res);
  };

  const getProductsByCategory = async (category) => {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    ).then((res) => res.json());
    setProducts(res);
  };

  useEffect(() => {
    if (location.pathname === "/" || category === "all") {
      getProductsAll();
    } else {
      const info = NavMenu.find((v) => v.name.toLowerCase() === category);
      if (info) {
        getProductsByCategory(info.category);
      }
    }
  }, [location, category]);

  return (
    <>
      <h2 className="blind">Product List</h2>
      <ProductList products={products} />
    </>
  );
};

export default Products;
