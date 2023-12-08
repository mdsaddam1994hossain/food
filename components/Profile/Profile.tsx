import useNotification from "@/hooks/Notification";
import { useAppSelector } from "@/redux/hooks";
import { signOut, useSession } from "next-auth/react";

import React, { useState } from "react";

const Profile = () => {
  const { user } = useAppSelector((state) => state.user);
  const [visible,setVisible] = useState(false)
  const { setMyNotification } = useNotification();
  const { data: session } = useSession();

  const openModal = ()=>{
    setVisible(true)
  }
  const closeModal = ()=>{
    setVisible(false)
  }

  console.log(user,"user.....")
  const logOut = () => {
    setMyNotification({
      status: "error",
      message: "Successfully log out",
      duration: 1000,
    });
    signOut();
  };
  return (
    <div className="flex justify-center items-center flex-col gap-6 my-8">
      <button onClick={logOut} className="bg-red-300 px-2 rounded-md">
        Log out
      </button>
      <div className="relative">
      <img
        src={user.image}
        height={200}
        width={200}
        alt="error"
        className="rounded-full"
      />
      <div className="absolute bottom-3 right-4">
        <button className="bg-red-300 rounded-full p-1 text-sm">Edit</button>
      </div>
      </div>
      <div>
        <p>Name : {user.name}</p>
        <p>Email : {user.email}</p>
      </div>
      
    </div>
  );
};

export default Profile;
