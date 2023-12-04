import { useAppSelector } from "@/redux/hooks";

import React from "react";
import CartDesign from "./CartDesign";

const CartComponent = () => {
  const { cart } = useAppSelector((state) => state.app);
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
    </div>
  );
};

export default CartComponent;
