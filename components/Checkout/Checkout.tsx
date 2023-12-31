'use client';
import { TProducts } from "@/data/type.data";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Datepicker, Dropdown, Select } from "flowbite-react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { addCartItem } from "@/redux/reducer/appslice";
import { useRouter } from "next/router";

const Checkout = () => {
  const dispatch = useAppDispatch();
  const [cartData, setCartData] = useState<TProducts>();
  const [deliveryDate,setDeliveryDate] = useState()
  const [deliveryTime,setDeliveryTime] = useState()
  const { data: session } = useSession();
  const { cart } = useAppSelector((state) => state.app);
  const router = useRouter()

  console.log(cart,"cart..")
  let subtotal = 0;
  cart.forEach((element) => {
    subtotal += element.price;
  });
  let taxtAmount = (subtotal * 5) / 100;
  let deliveryCharge = subtotal > 1000 ? 0 : 50;
  let total = subtotal + taxtAmount + deliveryCharge;


  const orderConfirm =()=>{
    console.log(cart,taxtAmount,deliveryCharge,total,)
  }

  const handleInputChange = (e:any) => {
    const value = e.target.value;
    console.log(value);
   // setInputValue(value);
  };


useEffect(()=>{
  if(cart.length == 0){
    router.push("/")
  }

},[cart])

  return (
    <div className="mx-4 md:mx-20 lg:mx-60 my-8">
      <p className="text-xl font-bold">Checkout</p>

      <div className="my-6 ">
        <div className="flex justify-between">
          <p className="font-semibold">SubTotal</p>
          <p className="text-lg font-semibold">BDT {subtotal}</p>
        </div>
        <div className="flex justify-between ">
          <p className="font-semibold">Taxt Amount</p>
          <p className="text-lg font-semibold">BDT {taxtAmount}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Delivery Charge </p>
          <p className="text-lg font-semibold">BDT {deliveryCharge}</p>
        </div>
        <div className="flex justify-between bg-sky-200 p-2 my-4 rounded-md ">
          <p className="font-semibold">Total </p>
          <p className="text-lg font-semibold">BDT {total}</p>
        </div>
      </div>
      <p className="text-xl font-bold ">Delivery Date and Time</p>
      <p className="text-sm mt-2">
        Fastest Shipping (Get product delivery within 30 mins) Active from 08:00
        AM to 10:00 PM.
      </p>
      <p className=" mt-4 mb-2">Please Select prefared delivery date and time</p>
      <div className="flex justify-between">
        <div>
         
          <Datepicker
            language="en"
            labelTodayButton="Hoje"
            labelClearButton="Limpar"
            onChange={(date)=>console.log(date)}
          />
          
        </div>
        <div>
         
          <Select onChange={handleInputChange}>
            <option value={"8-10am"}>08 AM - 10 AM</option>
            <option value={"10-12am"}>10 AM - 12 AM</option>
            <option value={"12-2pm"}>12 AM - 02 PM</option>
            <option value={"2-4pm"}>02 PM - 04 PM</option>
            <option value={"4-6pm"}>04 PM - 06 PM</option>
            <option value={"6-8pm"}>06 PM - 08 PM</option>
            <option value={"8-10pm"}>08 PM - 10 PM</option>
          </Select>
        </div>
      </div>
      <div className="my-6">
        <p className="text-xl font-bold">Shipping Address</p>
        <p className=" mt-2 text-sm">70, North Manda, Mugda, Dhaka-1214</p>
        <p className="text-sm">contact - 01674493677</p>
      </div>
      <motion.button whileTap={{scale:.9}} className="bg-sky-200 w-full rounded-md hover:bg-sky-300 text-lg font-bold p-2 ">Confirm Order</motion.button>
    </div>
  );
};

export default Checkout;
