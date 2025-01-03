import React from "react";
import Button from "./Button";

export default function Product({ data, setWindowPosition,index}) {
  return (
    <div onMouseEnter={()=>setWindowPosition(index)} className="w-full h-[20rem] py-20 hover:bg-purple-700 transition-colors duration-500 ease-in-out border-b-[1px] border-zinc-600">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between text-white">
        <h1 className="text-6xl capitalize font-medium">{data.title}</h1>
        <div className="details w-1/3">
          <p className="mb-10">{data.descriptions}</p>
          <div className="buttons flex gap-4 items-center">
            {data.live && <Button />}
            {data.case && <Button title={"View Case Study"} />}
          </div>
        </div>
      </div>  
    </div>
  );
}
