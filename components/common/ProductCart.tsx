import { TProducts } from "@/data/type.data";
import Image from "next/image";
import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import FavAndPurchageButton from "./FavAndPurchageButton";

type Props = {
  index: number;
  item: TProducts;
 
  // onPurchase:(item:TProducts)=>void;
  // isLoading:boolean;
};


const ProductCart: FC<Props> = ({ index, item }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div
      key={index}
      className="col-span-12 md:col-span-4 lg:col-span-3 border-2 rounded-lg border-red-100 hover:-translate-y-2 duration-300"
     
    >
      <div className="h-44 flex w-full justify-center items-center bg-slate-300  rounded-t-lg">
        <Image src={item.img} height={120} width={120} alt="error" />
      </div>
      <FavAndPurchageButton item={item} setIsLoading={setIsLoading}/>
     
      <div className="p-4">
        <p className="text-center text-lg">{item.name}</p>
        <p className="text-center text-sm font-bold">DBT {item.price}</p>
        {isLoading && (
         <div className="relative pb-4">
            <p className="text-center left-[50%] absolute text-sm font-bold transform -translate-x-1/2">Loading...</p>
         </div>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
