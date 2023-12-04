import { TProducts } from '@/data/type.data';
import React from 'react';
import { motion,Variants } from "framer-motion"
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addCartItem, increaseProductQuantity,decreaseProductQuantity, deleteProduct } from '@/redux/reducer/appslice';
import { toast } from 'react-toastify';

type Props ={
    item:TProducts
}
const CartDesign:React.FC<Props> = ({item}) => {
  const { cart } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch()
  let totals = 0;

  cart.forEach((element) => {
    totals += element.price;
  });

  
  const onAdd = (productId:number) => {
    dispatch(increaseProductQuantity(productId));  
}
  const onRemove = (productId:number) => {
    dispatch(decreaseProductQuantity(productId));  
}
  const onDelete = (productId:number) => {
    toast.error('Successfully delete from cart.', {
      autoClose: 1000, // Set the duration in milliseconds (2 seconds in this case)
    });
    dispatch(deleteProduct(productId));  
}
    return (
        <div className="grid px-2 rounded-md hover:shadow-md hover:-translate-y-2 duration-300 grid-cols-5 h-24 gap-4 items-center bg-sky-200 mb-4">
            <div className="col-span-1">
              <img src={item?.img} height={"80px"} width={"80px"} alt="error" />
            </div>
            <div className="col-span-3 flex gap-4 flex-col">
              <p className="text-lg font-medium">{item?.name}</p>
              <p className="font-medium ">BDT {item?.price}</p>
            </div>
            <div className="col-span-1 flex gap-4 flex-col">
              <div className="text-right">
                <motion.button onClick={()=>onDelete(item?.id)} whileHover={{rotate:360}} className="">
                  <RiDeleteBin2Fill color="red" />
                </motion.button>
              </div>
              <div className="flex gap-2 justify-end">
                <motion.button disabled={item.quantity == 1} onClick={()=>onRemove(item?.id)} whileHover={{rotate:1440}} className="text-lg w-5 rounded-full h-5 bg-white justify-center items-center flex">
                  -
                </motion.button>
                <p className="text-sm">{item?.quantity}</p>
                <motion.button onClick={()=>onAdd(item?.id)} whileHover={{rotate:360}} className="text-sm w-5 rounded-full h-5 bg-white justify-center items-center flex">
                  +
                </motion.button>
              </div>
            </div>
          </div>
    );
};

export default CartDesign;