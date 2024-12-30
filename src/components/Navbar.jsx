import React from "react";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto  flex items-center  overflow-hidden border-b-[1px] border-zinc-600 py-2">
      <img
        src="https://assets-global.website-files.com/6024cb0edb66de5e830d3665/60343177940d0b566d3991b7_og.png"
        alt="logo"
        className="w-20"
      />
      <div className="links flex items-center text-white justify-between  w-full">
        <div className="nleft flex items-center  gap-10  ml-20">
          {["Home", "Work", "Culture", "", "News"].map((items, idx) =>
            items == "" ? (
              <span key={idx} className="w-[1px] h-8 bg-zinc-400"></span>
            ) : (
              <a key={idx}
                href="#"
                className="font-sans text-sm flex items-center gap-1"
              >
                {idx == 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.2em #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-400 rounded-full"
                  ></span>
                )}
                {items}
              </a>
            )
          )}
        </div>
        <div className="mr-3"><Button></Button></div>
      </div>
    </div>
  );
}
