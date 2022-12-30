import { useState, useEffect } from "react";
import {
  StarRounded,
  StarHalfRounded,
  StarOutlineRounded,
} from "@mui/icons-material";

const Stars = ({ rate }) => {
  return (
    <div className="mb-1">
      {Array.from({ length: 5 }).map((_, i) => {
        if (+rate - i > 1) {
          return (
            <StarRounded key={i} className="text-yellow-400" fontSize="small" />
          );
        } else if (+rate - i >= 0.5) {
          return (
            <StarHalfRounded
              key={i}
              className="text-yellow-400"
              fontSize="small"
            />
          );
        } else {
          return (
            <StarOutlineRounded
              key={i}
              className="text-yellow-400"
              fontSize="small"
            />
          );
        }
      })}
    </div>
  );
};

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products/5").then((res) =>
      res.json()
    );
    setProduct(res);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {!!product ? (
        <div className="shadow-gray flex min-h-[600px] overflow-hidden rounded-3xl shadow-lg">
          <div className="flex w-1/2 items-center justify-center overflow-hidden bg-white">
            <img
              className="max-h-[550px] scale-75 object-contain"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="w-1/2 p-4">
            <div className="text-lg font-bold text-[rgb(34,34,34)] md:text-xl">
              {product.title}
            </div>
            <div className="text-[rgb(180,180,180)] md:text-lg">
              {product.category}
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Stars rate={product.rating.rate} />
              <div>Reviews({product.rating.count})</div>
            </div>
            <div className="mt-3 font-price text-xl tracking-wider text-[rgb(34,34,34)] md:text-2xl">
              ${product.price}
            </div>
            <div className="mt-4 flex h-10 gap-3">
              <button className="w-1/2 rounded-full border-2 border-solid border-[rgb(180,180,180)] transition-all hover:border-none hover:bg-[rgb(54,97,235)] hover:text-[rgb(240,240,240)]">
                Add to Cart
              </button>
              <button className="w-1/2 rounded-full bg-[rgb(138,207,237)] transition-all hover:bg-[rgb(54,97,235)] hover:text-[rgb(240,240,240)]">
                Buy
              </button>
            </div>
            <div className="mt-4 text-[rgb(34,34,34)]">
              {product.description}
            </div>
          </div>
        </div>
      ) : (
        <div className="shadow-gray flex min-h-[600px] rounded-3xl shadow-lg">
          <div className="w-1/2 animate-pulse bg-slate-100"></div>
          <div className="flex w-1/2 flex-col gap-2 p-4">
            <div className="h-7 animate-pulse rounded-full bg-slate-100"></div>
            <div className="h-6 animate-pulse rounded-full bg-slate-100"></div>
            <div className="h-6 animate-pulse rounded-full bg-slate-100"></div>
            <div className="mt-2 h-8 animate-pulse rounded-full bg-slate-100"></div>
            <div className="mt-2 flex h-10 gap-3">
              <div className="w-1/2 animate-pulse rounded-full bg-slate-100"></div>
              <div className="w-1/2 animate-pulse rounded-full bg-slate-100"></div>
            </div>
            <div className="mt-2 h-20 animate-pulse rounded-full bg-slate-100"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
