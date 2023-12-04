import Alert from "@/stories/Alert";
import React, { useState } from "react";
import { motion,Variants } from "framer-motion"
import { ProductsData } from "@/data/data";
import { TProducts } from "@/data/type.data";
import ProductCart from "../common/ProductCart";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addCartItem } from "@/redux/reducer/appslice";
import { useRouter } from "next/router";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};
const Home = () => {
  const {cart} = useAppSelector((state)=>state.app)
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  return (
    <div>
      {/* <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li variants={itemVariants}>Item 1 </motion.li>
        <motion.li variants={itemVariants}>Item 2 </motion.li>
        <motion.li variants={itemVariants}>Item 3 </motion.li>
        <motion.li variants={itemVariants}>Item 4 </motion.li>
        <motion.li variants={itemVariants}>Item 5 </motion.li>
      </motion.ul>
      </motion.nav> */}
    <div className="grid grid-cols-12 gap-4 md:gap-8 lg:gap-12 my-8">
       
    {ProductsData.map((item:TProducts,index:number)=>{
        return(
          <ProductCart key={index} index={index} item={item} />
        )
      })}
    </div>
      
    </div>
  );
};

export default Home;
