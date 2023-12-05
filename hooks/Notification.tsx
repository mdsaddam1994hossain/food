import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { TNotification } from "./TNotification.props";

export default function useNotification() {
  const [myNotiFication, setMyNotification] = useState<TNotification>();

  useEffect(() => {
    if (myNotiFication) {
      if (myNotiFication.status === "success") {
        toast.success(myNotiFication.message, {
          autoClose: myNotiFication.duration,
        });
      } else if (myNotiFication.status === "warning") {
        toast.warning(myNotiFication.message, {
          autoClose: myNotiFication.duration,
        });
      } else if (myNotiFication.status === "error") {
        toast.error(myNotiFication.message, {
          autoClose: myNotiFication.duration,
        });
      }
    }
  }, [myNotiFication]);

  return {
    myNotiFication,
    setMyNotification,
  };
}
