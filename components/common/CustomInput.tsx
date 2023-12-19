import React, { FC } from 'react';

type Props ={
    label:string,
    type:string,
    name:string,
    value:string | number | undefined,
    onChange:(e:any)=>void;

}

const CustomInput:FC<Props> = ({ label, type,name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className="mt-1 p-2 border rounded-md w-full"
      />
    </div>
  );
};

export default CustomInput;
