import { useState, memo } from "react";
import {
  StarRounded,
  StarHalfRounded,
  StarOutlineRounded,
  AddRounded,
  RemoveRounded,
} from "@mui/icons-material";
import Button from "../common/Button";

const Stars = memo(({ rate }) => {
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
});
Stars.displayName = "Stars";

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const onClickAdd = () => {
    if (quantity + 1 > 10) return;
    setQuantity((prev) => prev + 1);
  };

  const onClickRemove = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };

  // TODO : 장바구니에 이미 등록되어 있다면 장바구니 추가 X

  return (
    <>
      {!!product ? (
        <div className="shadow-gray flex min-h-[600px] w-full overflow-hidden rounded-3xl shadow-lg">
          <div className="flex w-1/2 items-center justify-center overflow-hidden bg-white">
            <img
              className="max-h-[550px] scale-75 object-contain"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="w-1/2 py-4 pl-4 pr-8">
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
            <div className="mt-3 flex justify-between">
              <div className="font-price text-xl tracking-wider text-[rgb(34,34,34)] md:text-2xl">
                ${product.price}
              </div>
              <div className="flex">
                <div
                  className="group cursor-pointer px-2"
                  onClick={onClickRemove}
                >
                  <RemoveRounded className="mt-1 rounded-full transition-all group-hover:bg-[rgb(54,97,235)] group-hover:text-[rgb(240,240,240)]" />
                </div>
                <div className="mx-1 select-none align-middle font-price text-xl md:text-2xl">
                  {quantity}
                </div>
                <div className="group cursor-pointer px-2" onClick={onClickAdd}>
                  <AddRounded className="mt-1 rounded-full transition-all group-hover:bg-[rgb(54,97,235)] group-hover:text-[rgb(240,240,240)]" />
                </div>
              </div>
            </div>
            <div className="mt-2 h-[1px] w-full bg-[rgb(220,220,220)]"></div>
            <div className="mt-2 flex justify-end gap-3">
              <div className="self-end font-price md:text-lg">total</div>
              <div className="font-price text-xl md:text-2xl">
                ${product.price * quantity}
              </div>
            </div>
            <div className="mt-4 flex h-10 gap-3">
              <Button className="w-1/2">Add to Cart</Button>
              <Button className="w-1/2" filled>
                Buy
              </Button>
            </div>
            <div className="mt-4 text-[rgb(34,34,34)]">
              {product.description}
            </div>
          </div>
        </div>
      ) : (
        <div className="shadow-gray flex min-h-[600px] w-full rounded-3xl shadow-lg">
          <div className="w-1/2 animate-pulse bg-slate-100"></div>
          <div className="flex w-1/2 flex-col gap-2 p-4">
            <div className="h-7 animate-pulse rounded-full bg-slate-100"></div>
            <div className="h-6 animate-pulse rounded-full bg-slate-100"></div>
            <div className="h-6 animate-pulse rounded-full bg-slate-100"></div>
            <div className="mt-2 h-8 animate-pulse rounded-full bg-slate-100"></div>
            <div className="mt-4 h-8 animate-pulse rounded-full bg-slate-100"></div>
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
