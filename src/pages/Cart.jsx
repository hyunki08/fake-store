import { useState, useEffect, useLayoutEffect } from "react";
import CartList from "../components/Cart/CartList";
import { useSessionStorage } from "./../hooks/useSessionStorage";
import { useLocalStorage } from "./../hooks/useLocalStorage";

const Cart = () => {
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
    let index = cartData.findIndex((v) => v.productId === id);
    if (index > -1)
      setCartData([...cartData.slice(0, index), ...cartData.slice(index + 1)]);

    index = products.findIndex((v) => v.id === id);
    if (index > -1)
      setProducts([...products.slice(0, index), ...products.slice(index + 1)]);
  };

  const onClickCheckout = () => {
    alert("Your purchase has been processed.");
    setCartData([]);
    setProducts([]);
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
    <>
      <h2 className="blind">Cart</h2>
      <CartList
        cartData={cartData}
        products={products}
        onClickAdd={onClickAdd}
        onClickRemove={onClickRemove}
        onClickDeleteFromCart={onClickDeleteFromCart}
        onClickCheckout={onClickCheckout}
      />
    </>
  );
};

export default Cart;
