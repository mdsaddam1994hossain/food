import React, { FC, ReactNode,useEffect } from "react";
import BottomTab from "../Footer/BottomTab";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useSession } from "next-auth/react";
import { useAppDispatch } from "@/redux/hooks";
import { TUser, setIsLogin, setUser } from "@/redux/reducer/userslice";
import { ToastContainer } from "react-toastify";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { data: session } = useSession()
  
  useEffect(()=>{
    if(session){
      dispatch(setUser(session.user as TUser))
      dispatch(setIsLogin(true))
     }else{
      dispatch(setUser({}));
       dispatch(setIsLogin(false));
     }
  },[session])
  return (
    <div>
      <header className="sticky top-0">
        <Header />
      </header>
      <main className="main px-4 md:px-20">{children}</main>
      <BottomTab />
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </div>
  );
};

export default Layout;
