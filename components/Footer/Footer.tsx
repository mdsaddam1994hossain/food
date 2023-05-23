import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-indigo-950 text-white px-4 pb-16 md:pb-0">
        <p className="text-base py-6 text-center">
          {new Date().getFullYear()} All Right reserved XZ Company
        </p>
      </div>
    </>
  );
};

export default Footer;
