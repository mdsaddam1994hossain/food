import Link from "next/link";
import React from "react";

const BottomTab = () => {
  return (
    <nav className="md:hidden bg-gray-900 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto flex justify-around py-2">
        <Link
          href="#"
          className="text-white text-center px-4 py-2 hover:bg-gray-800"
        >
          Contact
        </Link>
        <Link
          href="#"
          className="text-white text-center px-4 py-2 hover:bg-gray-800"
        >
          About
        </Link>
        <Link
          href="/"
          className="text-white text-center px-4 py-2 hover:bg-gray-800"
        >
          Home
        </Link>

        <Link
          href="#"
          className="text-white text-center px-4 py-2 hover:bg-gray-800"
        >
          Gallery
        </Link>
        <Link
          href="profile"
          className="text-white text-center px-4 py-2 hover:bg-gray-800"
        >
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default BottomTab;
