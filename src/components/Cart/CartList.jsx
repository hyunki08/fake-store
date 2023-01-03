import CartListItem from "./CartListItem";
import Line from "../common/Line";
import Button from "./../common/Button";

const CartList = ({
  cartData,
  products,
  onClickAdd,
  onClickRemove,
  onClickDeleteFromCart,
  onClickCheckout,
}) => {
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
        <Button
          className="mt-6 h-12 w-full md:text-lg"
          filled
          onClick={onClickCheckout}
          disabled={products.length === 0 || cartData.length === 0}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartList;
