import { useAppSelector } from "@/redux/hooks";
import { ToastContainer } from "react-toastify";
import React from "react";
import CartDesign from "./CartDesign";

const CartComponent = () => {
  const { cart } = useAppSelector((state) => state.app);

  let totals = 0;

  cart.forEach((element) => {
    totals += element.price;
  });
  return (
    <div className="mx-4 md:mx-20 lg:mx-60 my-8">
      {cart?.length > 0 ? (
        <div>
          <p className="mb-4 text-xl font-bold">BASKET</p>
          {cart?.map((item, index) => {
            return <CartDesign key={index} item={item} />;
          })}
        </div>
      ) : (
        <div>
          <img src="/assets/img/cart-loader.gif" width="100%" />
        </div>
      )}

      <p className="font-semibold text-right text-lg">Total : {totals}</p>
     <ToastContainer />
    </div>
  );
};

export default CartComponent;
