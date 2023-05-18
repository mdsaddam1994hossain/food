import React from "react";

const Header = () => {
  return (
    <>
      <div className="grid grid-cols-6 text-white  bg-indigo-700 py-6 px-40">
        <div className="col-span-1">
          <p className="text-xl">XZ Company </p>
        </div>
        <div className="col-span-4 text-center ">
          <a className="mx-4">Home </a>
          <a className="mx-4">About </a>
          <a className="mx-4">Gallery </a>
          <a className="mx-4">Contact </a>
        </div>
        <div className="col-span-1">
          <p>+8801 6775 66858 </p>
        </div>
      </div>
    </>
  );
};

export default Header;
