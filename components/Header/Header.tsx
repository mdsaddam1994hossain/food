import Link from "next/link";
import React, { useState } from "react";
import { useContext } from 'react';
import { FaLuggageCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useAppSelector } from "@/redux/hooks";
import { Badge } from "flowbite-react";
import { useRouter } from "next/router";


const Header = () => {
  const {cart} = useAppSelector((state)=>state.app)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white ">
      <div className="container px-4 md:px-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"
            alt="Logo"
            className="w-8 h-8 mr-2"
          />
          <span className="text-lg font-semibold">Company Name</span>
        </div>

        <div className="hidden md:flex items-center">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-gray-300 hover:text-white"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </nav>

          <span className="ml-4">+880 16744 93677</span>
        {cart.length > 0 && <motion.button className={`mx-2`} whileTap={{scale:.8}} onClick={()=>{router.push("/cart")}} >
             <div className="rounded-full w-4 h-4 flex items-center justify-center bg-red-600 ">
              <p style={{fontSize:"8px"}} color="warning">{cart.length}</p>
             </div>
             <FaLuggageCart />
           
           
         </motion.button>}

        
        </div>

        <div className="md:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 w-1/2 bg-gray-800 h-screen transition duration-[3000ms] ease-in-out pt-4 pl-2 ">
          <nav className="py-2">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white px-4 py-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white px-4 py-2"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 hover:text-white px-4 py-2"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white px-4 py-2"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-gray-300 hover:text-white px-4 py-2"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
