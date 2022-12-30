const Product = ({ product }) => {
  return (
    <div className="shadow-gray group flex min-h-[400px] cursor-pointer flex-col overflow-hidden rounded-b-3xl shadow-lg transition-all hover:bg-[rgb(54,97,235)] hover:shadow-2xl">
      <div className="flex h-2/3 justify-center overflow-hidden bg-white">
        <img
          className="object-contains max-h-[300px] min-h-[200px] scale-90 transition-all group-hover:scale-95"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="mx-3 mt-3 flex h-1/3 flex-col gap-[2px]">
        <div className="p h-3/5">
          <div className="font-bold text-[rgb(34,34,34)] transition-all line-clamp-2 group-hover:text-[rgb(240,240,240)] md:text-lg">
            {product.title}
          </div>
          <div className="text-xs text-[rgb(180,180,180)] transition-all line-clamp-1 group-hover:text-[rgb(230,230,230)] md:text-sm">
            {product.category}
          </div>
        </div>
        <div className="mt-1 h-2/5 font-price tracking-wider text-[rgb(34,34,34)] transition-all group-hover:text-[rgb(240,240,240)] md:text-xl">
          ${product.price}
        </div>
      </div>
    </div>
  );
};

export default Product;
