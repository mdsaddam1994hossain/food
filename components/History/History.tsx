import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { motion } from "framer-motion";
import { TOrderHistory, TProduct } from "@/data/type.data";
import ModalCustom from "../common/Modal";
import moment from "moment";
import Image from "next/image";

const History = () => {
  const [visible, setVisible] = useState(false);
  const [targetProduct, setTergetProduct] = useState<TOrderHistory>();
  const { orderHistory } = useAppSelector((state) => state.app);
  console.log(orderHistory, "order history");

  const handleClose = () => {
    setVisible(false);
  };
  const handleOpenModal = (item: TOrderHistory) => {
    //const product = orderHistory.find
    setTergetProduct(item);
    setVisible(true);
  };
  return (
    <div className="my-6">
      {orderHistory?.length >0 ? 
      
      <>
      <p className="text-2xl font-bold uppercase">Order History </p>
      <div className="my-6">
        {orderHistory?.map((item: TOrderHistory, index: number) => {
          return (
            <div className="my-4 bg-sky-100 p-6 rounded-md" key={index}>
              <div className="flex justify-between mt-2">
                <div className="flex gap-2 items-center">
                  <p className="font-semibold text-lg">{item?.deliveryDate}</p>
                  <p className=" font-normal text-sm">({item?.deliveryTime})</p>
                </div>
                <p className="font-semibold text-lg">BDT {item?.total}</p>
              </div>
              <p className="mt-2 font-semibold text-lg">
                {item?.totalItem} items
              </p>
              <motion.button
                onClick={() => handleOpenModal(item)}
                whileTap={{ scale: 0.9 }}
                className=" mt-3 rounded-full w-full py-2 hover:border-none uppercase font-bold hover:text-white hover:bg-sky-700 duration-200 border border-black"
              >
                View Details
              </motion.button>
            </div>
          );
        })}
      </div>
      
      </>:
      <div className="flex justify-center items-center h-screen flex-col">
        <img  src={"/assets/img/noTransection.gif"} height={500} width={500} />
        <p className="text-xl font-bold">You have no history</p>
      </div>
    
    }
      

      <ModalCustom show={visible} onClose={handleClose} header="ORDER HISTORY">
        <div className="p-6 lg:p-8">
          <p className="text-xl font-bold text-gray-600">
            {moment(targetProduct?.deliveryDate).format("DD MMM YYYY")}
          </p>
          <p className="text-xl font-bold text-sky-950 mt-4">
            BDT {targetProduct?.total}
          </p>
        </div>
        {targetProduct?.cart?.map((item, index) => {
          return (
            <div key={index} className="p-6 lg:p-8">
              <p className="text-xl font-bold text-sky-400">{item?.name}</p>
              <div className="flex justify-between">
                <p className="font-bold text-lg">
                  {item?.quantity} {item?.quantity > 1 ? "Pices" : "Pice"}
                </p>
                <p className="font-bold text-lg text-sky-950">
                  BDT {item?.price}
                </p>
              </div>
            </div>
          );
        })}
      </ModalCustom>
    </div>
  );
};

export default History;
