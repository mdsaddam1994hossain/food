import React, { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...rest }) => {
  return (
    <>
      <label>{label}</label>
      <input {...rest} />
    </>
  );
};

export default InputField;
