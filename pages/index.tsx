import React,{useState} from "react";
import Head from "next/head";
import { motion } from "framer-motion"
import Home from "@/components/Home/Home";
import Button from "@/components/Button";

const Homepage = () => {
  const [dis,setDis]= useState(false)
  return (
    <>
      <Head>App Title</Head>
      {/* <motion.button onClick={()=>setDis(!dis)}  whileHover={{scale:1.1}} whileTap={{scale:.9}} className="px-8 bg-red-500 py-2 rounded-full text-white mt-4">
        Book Now
      </motion.button>

      {dis &&  <p>Saddam Hossain</p>} */}

      <Home />
    </>
  );
};

export default Homepage;
