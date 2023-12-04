import React from "react";
import {  Variants } from "framer-motion";
import { ProductsData } from "@/data/data";
import { TProducts } from "@/data/type.data";
import ProductCart from "../common/ProductCart";

import { ToastContainer } from "react-toastify";


const Home = () => {

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 md:gap-8 lg:gap-12 my-8">
        {ProductsData.map((item: TProducts, index: number) => {
          return <ProductCart key={index} index={index} item={item} />;
        })}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
