import React from "react";

interface AlertProps {
  message?: string;
  style?: string;
  value?: number;
}

const Alert = ({ message, value, style }: AlertProps) => {
  return (
    <div>
      <p className={`${style}`}> {message} </p>
      <p> {value} </p>
    </div>
  );
};

export default Alert;
