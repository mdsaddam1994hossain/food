import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";
import CartDesign from "./CartDesign";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { addCartItem } from "@/redux/reducer/appslice";
import { TProducts } from "@/data/type.data";

const CartComponent = () => {
  const { cart } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data: session } = useSession();

  let totals = 0;

  cart.forEach((element) => {
    totals += element.price;
  });

  const onCheckout = () => {
    if (session) {
      router.push("/checkout");
    } else {
     localStorage.setItem("cart", JSON.stringify(cart));
      const callbackUrl = router.asPath;
      router.push(`/auth/login?callbackUrl=${callbackUrl}`);
    }
   
  };

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("cart") as string);
    console.log(products, "pro");
    if (products) {
      for (let i = 0; i < products.length; i++) {
        dispatch(addCartItem(products[i] as unknown as TProducts));
      }
      localStorage.removeItem("cart");
    }
  }, []);

  return (
    <div className="mx-4 md:mx-20 lg:mx-60 my-8">
      {cart?.length > 0 ? (
        <div>
          <p className="mb-4 text-xl font-bold">BASKET</p>
          {cart?.map((item, index) => {
            return <CartDesign key={index} item={item} />;
          })}

          <p className="font-semibold  text-lg">Total </p>
          <p className="text-3xl font-bold">BDT {totals}</p>

          <motion.button
            onClick={onCheckout}
            whileTap={{ scale: 0.9 }}
            className="w-full bg-sky-200 text-lg font-semibold h-12 my-6 rounded-md"
          >
            Checkout
          </motion.button>
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
