import useNotification from "@/hooks/Notification";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import ModalCustom from "../common/Modal";
import CustomInput from "../common/CustomInput";
import { setUser } from "@/redux/reducer/userslice";

const Profile = () => {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const [tempUser, setTempUser] = useState({
    name: user?.name,
    email: user?.email,
    image: user?.image,
    address: user?.address,
    phone: user?.phone,
  });
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const { setMyNotification } = useNotification();
  const { data: session } = useSession();

  const openModal = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };

  console.log(user)

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTempUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(tempUser, "tt");
    dispatch(setUser(tempUser));
    setVisible(false);
  };
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
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={openModal}
            className="bg-red-300 rounded-full p-1 text-sm"
          >
            Edit
          </motion.button>
        </div>
      </div>
      <div>
        <p>Name : {user.name}</p>
        <p>Email : {user.email}</p>
        {user?.address && user?.address?.length > 0 && (
          <p>Address : {user?.address}</p>
        )}

        <div className="flex justify-between">
          <p>History</p>
          <motion.button onClick={() => router.push("/history")}>
            <IoIosArrowForward />
          </motion.button>
        </div>
      </div>

      <ModalCustom show={visible} onClose={handleClose} header="Update Profile">
        <div className="p-6 lg:p-8">
          <form onSubmit={handleSubmit}>
            <CustomInput
              label="Name"
              type="text"
              name="name"
              value={tempUser?.name}
              onChange={handleUsernameChange}
            />
            <CustomInput
              label="Address"
              type="text"
              name="address"
              value={tempUser?.address}
              onChange={handleUsernameChange}
            />
            <CustomInput
              label="Phone"
              type="text"
              name="phone"
              value={tempUser?.phone}
              onChange={handleUsernameChange}
            />

            <motion.button
              type="submit"
              className="bg-sky-700 w-full py-2 rounded-md font-semibold text-white "
            >
              Update
            </motion.button>
          </form>
        </div>
      </ModalCustom>
    </div>
  );
};

export default Profile;
