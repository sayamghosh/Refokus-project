import React, { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

export default function Work() {
  const [images, setImages] = useState([
    {
      url: "https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      top: "54%",
      left: "50%",
      isActive: false,
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
  ]);

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    function showImage(arr) {
      setImages(
        images.map((item, index) => {
          if (arr.includes(index)) {
            return { ...item, isActive: true };
          } else {
            return { ...item, isActive: false };
          }
        })
      );
    }
    switch (Math.floor(latest * 100)) {
      case 0:
        showImage([]);
        break;
      case 1:
        showImage([0]);
        break;
      case 2:
        showImage([0,1]);
        break;
      case 3:
        showImage([0,1,2]);
        break;
      case 4:
        showImage([0,1,2,3]);
        break;
      case 5:
        showImage([0,1,2,3,4]);
        break;
    }
  });

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
