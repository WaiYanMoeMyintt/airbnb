"use client";
import React from "react";
import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";
interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  formatPrice?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
  formatPrice,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-natural-700 absolute top-5 lef-2 "
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        type={type}
        placeholder=""
        className={`
           peer w-full p-4 pt-6
           font-light bg-white border-2
           rounded-md outline-none transition 
           disabled:opacity-70
           disabled:cursor-not-allowed
           ${formatPrice ? "pl-9" : "pl-4"}
           ${errors[id] ? "border-rose-500" : "border-neutral-300"}
           ${errors[id] ? "focus:border-rose-500" : "border-neutral-300"}

        `}
      />
      <label
        className={`absolute text-md duration-150 top-5 transform -translate-y-3 z-10 origin-[0]  ${
          formatPrice ? "left-9" : "left-4"
        } ${errors[id]? "text-rose-500" : "text-zinc-400"}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
