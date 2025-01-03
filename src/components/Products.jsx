import React from "react";
import Product from "./Product";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      title: "Slack",
      descriptions:
        "A collaboration platform for teams, offering messaging, file sharing, and integration with other productivity tools.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      descriptions:
        "A powerful image editing software used for photo manipulation, graphic design, and digital artwork creation.",
      live: true,
      case: true,
    },
    {
      title: "YIR 2022",
      descriptions:
        "A platform for version control and collaborative software development, using Git for code repository management.",
      live: true,
      case: true,
    },
    {
      title: "Trello",
      descriptions:
        "A task and project management tool that uses boards, lists, and cards to organize workflows and tasks.",
      live: true,
      case: true,
    },
  ];

  const [position, setposition] = useState(0);

  function setWindowPosition(pos) {
    setposition(pos * 20);
  }

  return (
    <div className="w-full relative">
      {products.map((item, index) => (
        <Product key={index} index={index} data={item} setWindowPosition={setWindowPosition} />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none ">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position+'rem', x: "-50%" }}
          className="window absolute left-[40%]  w-[30rem] h-[20rem] bg-white overflow-hidden"
        >
          <div className="scene w-full h-full bg-sky-400"></div>
          <div className="scene w-full h-full bg-red-400"></div>
          <div className="scene w-full h-full bg-yellow-400"></div>
          <div className="scene w-full h-full bg-orange-400"></div>
        </motion.div>
      </div>
    </div>
  );
}
