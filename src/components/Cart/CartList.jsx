import { useEffect, useRef, useState } from "react";
import CartListItem from "./CartListItem";
import Line from "../common/Line";

const TEST = [
  { productId: 1, quantity: 2 },
  { productId: 5, quantity: 10 },
  { productId: 11, quantity: 1 },
];

const TEST_RES = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
    quantity: 2,
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
    quantity: 10,
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
    quantity: 1,
  },
];

const CartList = () => {
  const [products, setProducts] = useState([]);
  // TODO: 로컬스토리지로 변경
  const cartData = useRef(TEST);

  const getCartListData = async () => {
    // const res = await Promise.allSettled(
    //   cartData.current.map(
    //     async (v) =>
    //       await fetch(`https://fakestoreapi.com/products/${v.productId}`)
    //         .then((res) => res.json())
    //         .then((res) => ({ ...res, quantity: v.quantity }))
    //   )
    // ).then((res) => res.map((v) => v.value));
    // setProducts(res);
    setProducts(TEST_RES);
  };

  const onClickAdd = (id) => {
    const product = { ...products.find((v) => v.id === id) };
    if (product.quantity + 1 > 10) return;
    product.quantity++;
    setProducts([...products.filter((v) => v.id !== id), product]);
  };

  const onClickRemove = (id) => {
    const product = { ...products.find((v) => v.id === id) };
    if (product.quantity === 1) return;
    product.quantity--;
    setProducts([...products.filter((v) => v.id !== id), product]);
  };

  const onClickDeleteFromCart = (id) => {
    setProducts([...products.filter((v) => v.id !== id)]);
    cartData.current = cartData.current.filter((v) => v.productId !== id);
  };

  useEffect(() => {
    if (cartData.current.length > 0) getCartListData();
  }, []);

  return (
    <div className="shadow-gray flex min-h-[400px] flex-col rounded-3xl shadow-lg lg:flex-row">
      <div className="w-full px-6 pt-2 pb-10 lg:w-[calc(100%-380px)]">
        <div className="text-xl font-bold text-[rgb(34,34,34)] md:text-2xl">
          Cart ({cartData.current.length})
        </div>
        <div className="mt-2 flex flex-col gap-2">
          {cartData.current.map((v) => (
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
              {products.reduce(
                (total, { price, quantity }) => (total += price * quantity),
                0
              )}
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
              {products.reduce(
                (total, { price, quantity }) => (total += price * quantity),
                0
              ) + (products.length > 0 ? 5 : 0)}
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
