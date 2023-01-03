import { useLayoutEffect, useEffect, useState } from "react";
import CartListItem from "./CartListItem";
import Line from "../common/Line";
import { useSessionStorage } from "./../../hooks/useSessionStorage";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const CartList = () => {
  const [products, setProducts] = useState([]);
  const [user, _] = useSessionStorage("user", {});
  const username = !!user.username ? user.username : "";
  const [emptyUserCart, setEmptyUserCart] = useLocalStorage("cart_", []);
  const [cartData, setCartData] = useLocalStorage(`cart_${username}`, []);

  const getCartListData = async () => {
    const res = await Promise.allSettled(
      cartData.map(
        async (v) =>
          await fetch(`https://fakestoreapi.com/products/${v.productId}`)
            .then((res) => res.json())
            .then((res) => ({ ...res, quantity: v.quantity }))
      )
    ).then((res) => res.map((v) => v.value));
    setProducts(res);
  };

  const onClickAdd = (id) => {
    const product = { ...products.find((v) => v.id === id) };
    if (product.quantity + 1 > 10) return;
    product.quantity++;
    setProducts([...products.filter((v) => v.id !== id), product]);
    setCartData(
      cartData.map((v) => {
        if (v.productId === id) {
          v.quantity++;
        }
        return { ...v };
      })
    );
  };

  const onClickRemove = (id) => {
    const product = { ...products.find((v) => v.id === id) };
    if (product.quantity === 1) return;
    product.quantity--;
    setProducts([...products.filter((v) => v.id !== id), product]);
    setCartData(
      cartData.map((v) => {
        if (v.productId === id) {
          v.quantity--;
        }
        return { ...v };
      })
    );
  };

  const onClickDeleteFromCart = (id) => {
    const index = cartData.findIndex((v) => v.id !== id);
    if (index === -1) return;
    setCartData([...cartData.slice(0, index), ...cartData.slice(index + 1)]);
    setProducts([...products.filter((v) => v.id !== id)]);
  };

  useLayoutEffect(() => {
    if (!!username && emptyUserCart.length > 0) {
      setCartData((prev) => [...prev, ...emptyUserCart]);
      setEmptyUserCart([]);
    }
  }, []);

  useEffect(() => {
    if (cartData.length > 0) getCartListData();
  }, []);

  return (
    <div className="shadow-gray flex min-h-[400px] w-full flex-col items-stretch rounded-3xl shadow-lg lg:flex-row">
      <div className="w-full px-6 pt-2 pb-10 lg:w-[calc(100%-380px)]">
        <div className="text-xl font-bold text-[rgb(34,34,34)] md:text-2xl">
          Cart ({cartData.length || 0})
        </div>
        <div className="mt-2 flex flex-col gap-2">
          {cartData.map((v) => (
            <CartListItem
              key={`${v.productId}_${v.quantity}`}
              product={
                products.length > 0 &&
                products.find((p) => p.id === v.productId)
              }
              onClickAdd={() => onClickAdd(v.productId)}
              onClickRemove={() => onClickRemove(v.productId)}
              onClickDelete={() => onClickDeleteFromCart(v.productId)}
            />
          ))}
        </div>
      </div>
      <div className="w-full pl-2 pr-6 pt-2 pb-6 lg:sticky lg:top-0 lg:h-[330px] lg:w-[380px]">
        <div className="text-xl font-bold text-[rgb(34,34,34)] md:text-2xl">
          Summary
        </div>
        <div className="mt-6 flex flex-col gap-1">
          <div className="flex justify-between">
            <div className="font-price text-sm text-[rgb(34,34,34)] md:text-base">
              Subtotal
            </div>
            <div className="font-price tracking-wider text-[rgb(34,34,34)] md:text-lg">
              $
              {products
                .reduce(
                  (total, { price, quantity }) => (total += price * quantity),
                  0
                )
                .toFixed(2)}
            </div>
          </div>
          <div className="mt-2 flex justify-between">
            <div className="font-price text-sm text-[rgb(34,34,34)] md:text-base">
              Estimated Shipping & Handling
            </div>
            <div className="font-price tracking-wider text-[rgb(34,34,34)] md:text-lg">
              ${products.length > 0 ? 5 : 0}
            </div>
          </div>
          <Line className="mt-3" />
          <div className="mt-3 flex justify-between">
            <div className="font-price text-[rgb(34,34,34)] md:text-lg">
              total
            </div>
            <div className="font-price tracking-wider text-[rgb(34,34,34)] md:text-xl">
              $
              {(
                products.reduce(
                  (total, { price, quantity }) => (total += price * quantity),
                  0
                ) + (products.length > 0 ? 5 : 0)
              ).toFixed(2)}
            </div>
          </div>
        </div>
        <button className="mt-6 h-12 w-full rounded-full bg-[rgb(138,207,237)] transition-all hover:bg-[rgb(54,97,235)] hover:text-[rgb(240,240,240)] md:text-lg">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartList;
