import React from "react";

export default function Work() {
  let images = [
    {
      url: "https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      top: "54%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      top: "50%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      top: "51%",
      left: "47%",
      isActive: false,
    },
    {
      url: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      top: "53%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      top: "55%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      top: "47%",
      left: "50%",
      isActive: false,
    },
  ];
  return (
    <div className="w-full mt-10">
      <div className="relative max-w-screen-xl mx-auto justify-center flex items-baseline">
        <h1 className="text-[30vw] text-zinc-200 leading-none tracking-tight select-none">
          Work
        </h1>
        <span
          style={{ boxShadow: "0 0 0.2em #fc2d2d" }}
          className="inline-block w-3 h-3  rounded-full ml-8 bg-red-600"
        ></span>
        <div className="absolute w-full h-full ">
          {images.map((elem, index) =>
            elem.isActive ? (
              <img
              key={index}
                className="absolute w-64 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                style={{ top: elem.top, left: elem.left }}
                src={elem.url}
                alt="image"
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
