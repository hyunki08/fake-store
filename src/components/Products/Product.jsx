const Product = ({ product }) => {
  return (
    <div className="shadow-gray flex min-h-[400px] cursor-pointer flex-col rounded-b-3xl shadow-lg overflow-hidden group transition-all hover:bg-[rgb(54,97,235)] hover:shadow-2xl">
      <div className="flex h-2/3 justify-center overflow-hidden bg-white">
        <img
          className="max-h-[300px] min-h-[200px] object-contains scale-90 transition-all group-hover:scale-95"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="mx-3 mt-3 h-1/3 flex flex-col gap-[2px]">
        <div className="h-3/5 p">
          <div className="text-[rgb(34,34,34)] line-clamp-2 md:text-lg font-bold transition-all group-hover:text-white">
            {product.title}
          </div>
          <div className="text-[rgb(180,180,180)] text-xs md:text-sm line-clamp-1 transition-all group-hover:text-[rgb(240,240,240)]">{product.category}</div>
        </div>
        <div className="text-[rgb(34,34,34)] h-2/5 mt-1 font-price md:text-xl tracking-wider transition-all group-hover:text-white">${product.price}</div>
      </div>
    </div>
  );
};

export default Product;
