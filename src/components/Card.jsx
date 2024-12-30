import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function Card({ width, start, para }) {
  return (
    <div
      className={`${width} hover:bg-purple-700 transition-colors duration-500 ease-in-out flex flex-col h-96 justify-between bg-zinc-800 text-zinc-200 p-5 rounded-xl`}
    >
      <div className="w-full ">
        <div className="w-full flex items-center justify-between">
          <h3>One heading</h3>
          <GoArrowRight />
        </div>
        <h1 className="text-3xl font-medium mt-5">Heading left</h1>
      </div>
      <div className="down w-full">
        {start && (
          <div className="mb-10">
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a project
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border-[1px] border-zinc-100">
              Contact us
            </button>
          </div>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </div>
  );
}
