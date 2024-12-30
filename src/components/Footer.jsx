import React from "react";

export default function Footer() {
  return (
    <div className="w-full text-zinc-50 py-20">
      <div className="max-w-screen-xl mx-auto flex gap-2">
        <div className="basis-1/2">
          <h1 className="text-9xl font-sans font-semibold tracking-tight leading-none">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-16 justify-end pr-10">
          <div className="flex flex-col text-zinc-400">
            <h4 className="mb-4 text-xl font-medium text-zinc-300">socials</h4>
            {["instagram", "twitter", "facebook", "linkedin"].map(
              (item, index) => (
                <a href="#" key={index} className="text-sm mb-1 capitalize">
                  {item}
                </a>
              )
            )}
          </div>
          <div className="flex flex-col text-zinc-400">
            <h4 className="mb-4 text-xl font-medium text-zinc-300">sitemap</h4>
            {["home", "work", "careers", "contact"].map((item, index) => (
              <a href="#" key={index} className="text-sm mb-1 capitalize">
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-[370px] ">
          <p className="tracking-normal leading-tight font-medium text-base">
            Refokus is a pioneering digital agency driven by design and
            empowered by technology
          </p>
        </div>
      </div>
    </div>
  );
}
