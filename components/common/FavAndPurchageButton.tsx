import React,{FC} from 'react';
import { motion } from "framer-motion";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { TProducts } from '@/data/type.data';
import { addCartItem } from '@/redux/reducer/appslice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ToastContainer, toast } from 'react-toastify';

type Props={
    item:TProducts;
    setIsLoading:(v:boolean)=>void;
}
const FavAndPurchageButton:FC<Props> = ({item,setIsLoading}) => {

    const {cart} = useAppSelector((state)=>state.app)
  const dispatch = useAppDispatch()

    const onPurchase = (item:TProducts)=>{
      
        setIsLoading(true)
        const product = cart.find((product) => product.id === item.id)
        setTimeout(()=>{
          setIsLoading(false)
          if(product){
            
            toast.warning('Already added this item!', {
              autoClose: 1000, // Set the duration in milliseconds (2 seconds in this case)
            });
           }else{
            dispatch(addCartItem(item))
           }
        },1000)   
      }
    return (
        <div className={`flex justify-center gap-4 mt-4 h-6`}>
        <motion.div
          whileTap={{ scale: 0.8 }}
          className={`bg-indigo-600  text-white px-2  rounded-sm flex justify-center items-center`}
        >
          <motion.button whileHover={{ rotate: 360 }}>
            <MdOutlineFavoriteBorder />
          </motion.button>
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.8 }}
          className={`bg-indigo-600  text-white px-2  rounded-sm flex justify-center items-center`}
        >
          <motion.button
            whileHover={{ rotate: 360 }}
            onClick={() => onPurchase(item)}
          >
            <MdOutlineShoppingCart />
          </motion.button>
        </motion.div>
      </div>
    );
};

export default FavAndPurchageButton;