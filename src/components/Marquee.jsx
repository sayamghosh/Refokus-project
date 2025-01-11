import React from "react";
import { motion } from "framer-motion";

export default function Marquee({ data }) {
  return (
    <div className="w-full flex overflow-hidden gap-16">
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        repeatType: "loop"}}
        className="flex  gap-40 pr-40 flex-shrink-0"
      >
        {data.map((url, index) => (
          <img key={index} src={url} alt="marquee" className="w-28" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        repeatType: "loop"}}
        className="flex  gap-40 pr-40 flex-shrink-0"
      >
        {data.map((url, index) => (
          <img key={index} src={url} alt="marquee" className="w-28" />
        ))}
      </motion.div>
      
    </div>
  );
}
