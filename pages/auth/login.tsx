import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const LoginPage = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: router.query.callbackUrl as string,
            // redirect: false,
          }).then((data) => {
            console.log(data, "=====data");
          })
        }
        className="flex w-80 items-center justify-center rounded-full bg-white py-3 text-lg font-bold text-blacklight"
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)" }}
      >
        Login with google
      </button>
    </div>
  );
};

export default LoginPage;
