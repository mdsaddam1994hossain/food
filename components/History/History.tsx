import React from 'react';
import { useAppSelector } from '@/redux/hooks';
import { motion } from "framer-motion";
import { TOrderHistory } from '@/data/type.data';


const History = () => {
    const { orderHistory } = useAppSelector((state) => state.app);
    console.log(orderHistory,"order history")
    return (
        <div className='my-6'>
           <p className='text-2xl font-bold uppercase'>Order History </p> 
           
          <div className='my-6'>
            {
               orderHistory?.map((item:TOrderHistory,index:number)=>{
                return(
                    <div className='my-4 bg-sky-100 p-6 rounded-md' key={index}>
                    <div className="flex justify-between mt-2">
                     <div className='flex gap-2 items-center'>
                     <p className='font-semibold text-lg'>{item?.deliveryDate}</p>
                     <p className=' font-normal text-sm'>({item?.deliveryTime})</p>
                     </div>
                       <p className='font-semibold text-lg'>BDT {item?.total}</p>
                    </div>
                    <p className='mt-2 font-semibold text-lg'>{item?.totalItem} items</p>
                    <motion.button whileTap={{scale:.9}} className=' mt-3 rounded-full w-full py-2 hover:border-none uppercase font-bold hover:text-white hover:bg-sky-700 duration-200 border border-black'>View Details</motion.button>
                 </div>
                )
               }) 
            }
          </div>
        </div>
    );
};

export default History;