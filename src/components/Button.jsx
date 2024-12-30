import React from "react";
import { IoIosReturnRight } from "react-icons/io";

export default function Button({title="Get Started"}) {
  return (
    <div className="text-sm font-medium w-40 px-3 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between">
      <span>{title}</span>
      <IoIosReturnRight  />
    </div>
  );
}
