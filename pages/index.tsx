import React from "react";
import Head from "next/head";
import Home from "@/components/Home/Home";
import Button from "@/components/Button";

const Homepage = () => {
  return (
    <>
      <Head>App Title</Head>
      <Button className="px-8 bg-red-500 py-2 rounded-full text-white mt-4">
        Book Now
      </Button>

      <Home />
    </>
  );
};

export default Homepage;
