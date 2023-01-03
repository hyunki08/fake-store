import { useState, memo } from "react";
import {
  StarRounded,
  StarHalfRounded,
  StarOutlineRounded,
  AddRounded,
  RemoveRounded,
} from "@mui/icons-material";
import Button from "../common/Button";
import { useLocalStorage } from "./../../hooks/useLocalStorage";
import { useSessionStorage } from "./../../hooks/useSessionStorage";

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
  const [user, _] = useSessionStorage("user", {});
  const username = !!user.username ? user.username : "";
  const [cart, setCart] = useLocalStorage(`cart_${username}`, []);
  const [quantity, setQuantity] = useState(1);

  const onClickAdd = () => {
    if (quantity + 1 > 10) {
      alert("You cannot purchase more than 10.");
      return;
    }
    setQuantity((prev) => prev + 1);
  };

  const onClickRemove = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };

  const onClickAddToCart = () => {
    const index = cart.findIndex((v) => v.productId === product.id);
    if (index === -1) {
      setCart((prev) => [...prev, { productId: product.id, quantity }]);
      alert("Added to cart.");
      return;
    }
    setCart(
      cart.map((v) => {
        if (v.productId === product.id) {
          if (v.quantity + quantity > 10) {
            alert(
              "You can't purchase more than 10.\nOnly 10 will be added to the cart."
            );
            v.quantity = 10;
          } else {
            v.quantity += quantity;
          }
        }
        return { ...v };
      })
    );
    alert("Added to cart.");
  };

  const onClickBuy = () => {
    alert("Your purchase has been processed.");
    const index = cart.findIndex((v) => v.productId === product.id);
    if (index === -1) return;
    setCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
    alert("Identical products in the cart will be removed.");
  };

  return (
    <>
      {!!product ? (
        <div className="shadow-gray flex min-h-[600px] w-full flex-col overflow-hidden rounded-3xl shadow-lg md:flex-row">
          <div className="flex items-center justify-center overflow-hidden bg-white md:w-1/2">
            <img
              className="max-h-[550px] scale-75 object-contain"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="py-4 pl-4 pr-8 md:w-1/2">
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
                ${(product.price * quantity).toFixed(2)}
              </div>
            </div>
            <div className="mt-4 flex h-10 gap-3">
              <Button className="w-1/2" onClick={onClickAddToCart}>
                Add to Cart
              </Button>
              <Button className="w-1/2" filled onClick={onClickBuy}>
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
