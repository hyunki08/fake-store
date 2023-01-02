import ProductListItem from "./ProductListItem";

const ProductList = ({ products }) => {
  return (
    <div className="grid w-full auto-rows-[1fr] grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {products.length > 0
        ? products.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))
        : Array.from({ length: 8 }).map((_, i) => <ProductListItem key={i} />)}
    </div>
  );
};

export default ProductList;
