import {
  AddRounded,
  RemoveRounded,
  DeleteForeverRounded,
} from "@mui/icons-material";

const CartListItem = ({
  product,
  onClickAdd,
  onClickRemove,
  onClickDelete,
}) => {
  return (
    <>
      {!!product ? (
        <div className="shadow-gray flex min-h-[200px] overflow-hidden rounded-3xl shadow-lg">
          <div className="flex w-1/5 items-center justify-center overflow-hidden bg-white">
            <img
              className="max-h-[150px] scale-75 object-contain"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="w-4/5 py-4 pl-4 pr-8">
            <div className="flex justify-between gap-2">
              <div className="">
                <div className="font-bold text-[rgb(34,34,34)] md:text-lg">
                  {product.title}
                </div>
                <div className="text-sm text-[rgb(180,180,180)] md:text-base">
                  {product.category}
                </div>
              </div>
              <div className="">
                <div
                  className="group mt-2 cursor-pointer rounded-full p-2 transition-all hover:bg-[rgb(54,97,235)]"
                  onClick={onClickDelete}
                >
                  <DeleteForeverRounded className="mb-[1px] group-hover:text-[rgb(240,240,240)]" />
                </div>
              </div>
            </div>
            <div className="mt-3 flex justify-between">
              <div className="font-price text-lg tracking-wider text-[rgb(34,34,34)] md:text-xl">
                ${product.price}
              </div>
              <div className="flex">
                <div
                  className="group cursor-pointer px-2"
                  onClick={onClickRemove}
                >
                  <RemoveRounded
                    className="rounded-full transition-all group-hover:bg-[rgb(54,97,235)] group-hover:text-[rgb(240,240,240)]"
                    fontSize="small"
                  />
                </div>
                <div className="mx-1 select-none align-middle font-price text-lg md:text-xl">
                  {product.quantity}
                </div>
                <div className="group cursor-pointer px-2" onClick={onClickAdd}>
                  <AddRounded
                    className="rounded-full transition-all group-hover:bg-[rgb(54,97,235)] group-hover:text-[rgb(240,240,240)]"
                    fontSize="small"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 h-[1px] w-full bg-[rgb(220,220,220)]"></div>
            <div className="mt-2 flex justify-end gap-3">
              <div className="font-price text-lg md:text-xl">
                ${product.price * product.quantity}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="shadow-gray flex min-h-[200px] overflow-hidden rounded-3xl shadow-lg">
          <div className="w-1/5 animate-pulse bg-slate-100"></div>
          <div className="flex w-4/5 flex-col gap-2 p-4">
            <div className="h-7 animate-pulse rounded-full bg-slate-100"></div>
            <div className="h-6 animate-pulse rounded-full bg-slate-100"></div>
            <div className="h-6 animate-pulse rounded-full bg-slate-100"></div>
            <div className="mt-4 h-8 animate-pulse rounded-full bg-slate-100"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartListItem;
